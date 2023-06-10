import { useHomePage } from "@/hooks/HomePage";
import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";
import { Hero } from "@/components/common/Hero";
import FilterSettings from "./FilterSettings";
import { Button } from "@/components/common/Button";
import ProductsList from "@/components/common/List/ProductsList";
import Loader from "@/components/common/Loader";

interface Props {
  featuredProductsData: Product[];
  productsCount: number;
  setProductsCount: Dispatch<SetStateAction<number>>;
}

// Contents of home page
export default function HomePage({
  featuredProductsData,
  setProductsCount,
}: Props) {
  const {
    filteredProducts,
    selectedCategories,
    allCategoriesData,
    isLoading,
    error,
    handleChangeSearchResults,
    handleSortByCategory,
    handleLoadMoreProducts,
  } = useHomePage({
    featuredProductsData,
    setProductsCount,
  });

  console.log("products: ", filteredProducts);

  if (isLoading)
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div data-testid="error" className="h-screen">
        Error!
      </div>
    );

  return (
    <>
      <div className="2xl:mx-auto 2xl:container px-4 md:px-6 2xl:px-0 pb-16 flex justify-center">
        <div className="w-full max-w-screen-2xl">
          <section>
            <Hero />
          </section>
          <section className="pt-20 pb-8">
            <FilterSettings
              handleChangeSearchResults={handleChangeSearchResults}
              allCategoriesData={allCategoriesData}
              selectedCategories={selectedCategories}
              handleSortByCategory={handleSortByCategory}
            />
          </section>
          <section>
            <ProductsList filteredProducts={filteredProducts} />
          </section>
          <section
            onClick={handleLoadMoreProducts}
            className={`flex justify-center items-center mt-28 ${
              (Object.keys(selectedCategories).length > 0 ||
                featuredProductsData.length === 20) &&
              "hidden"
            }`}
          >
            <Button text="Load More" />
          </section>
        </div>
      </div>
    </>
  );
}
