import { useHomePage } from "@/hooks/HomePage";
import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";
import Hero from "@/components/common/Hero";
import { productCategoryLabel } from "@/constants/labels";
import FilterSettings from "./FilterSettings";
import Button from "@/components/common/Button";
import ProductsList from "@/components/common/List/ProductsList";

interface Props {
  featuredProductsData: Product[];
  setProductsCount: Dispatch<SetStateAction<number>>;
}

export default function HomePage({
  featuredProductsData,
  setProductsCount,
}: Props) {
  const {
    filteredProducts,
    selectedCategories,
    handleChangeSearchResults,
    handleSortByCategory,
    handleLoadMoreProducts,
  } = useHomePage({
    featuredProductsData,
    setProductsCount,
  });

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
              labels={productCategoryLabel}
              checkedItems={selectedCategories}
              onChange={handleSortByCategory}
            />
          </section>
          <section>
            <ProductsList filteredProducts={filteredProducts} />
          </section>
          <section
            onClick={handleLoadMoreProducts}
            className=" flex justify-center items-center mt-28"
          >
            <Button text="Load More" />
          </section>
        </div>
      </div>
    </>
  );
}
