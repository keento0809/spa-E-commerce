import { useHomePage } from "@/hooks/HomePage";
import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";
import Hero from "@/components/common/Hero";
import { productCategoryLabel } from "@/constants/labels";
import FilterSettings from "./FilterSettings";
import ProductCard from "@/components/common/Card/ProductCard";

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
          <Hero />
          <div className="pt-20 pb-8">
            <FilterSettings
              handleChangeSearchResults={handleChangeSearchResults}
              labels={productCategoryLabel}
              checkedItems={selectedCategories}
              onChange={handleSortByCategory}
            />
          </div>
          {filteredProducts.length === 0 && (
            <div className="py-8 text-xl font-semibold text-center w-full h-96">
              No Products Found...
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-8 gap-x-8">
            {filteredProducts.length !== 0 &&
              filteredProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
          <div
            onClick={handleLoadMoreProducts}
            className=" flex justify-center items-center"
          >
            <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
