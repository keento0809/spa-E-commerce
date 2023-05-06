import SearchBar from "@/components/common/SearchBar";
import { useHomePage } from "@/hooks/HomePage";
import { Product } from "@/types/product";
import Image from "next/image";
import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Hero from "@/components/common/Hero";
import { productCategoryLabel } from "@/constants/labels";
import FilterSettings from "./FilterSettings";

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
                return (
                  <div key={product.id} className="flex items-start flex-col">
                    <div className="relative group">
                      <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-500 via-slate-200 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full z-30"></div>
                      <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 z-50">
                        <Link
                          href={`/product-detail/${product.id}`}
                          className="block bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white text-center"
                        >
                          Quick View
                        </Link>
                      </div>
                      <div className="bg-white px-6 py-12">
                        <div className="relative flex justify-center items-center bg-white py-8 px-12 w-64 h-500">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start jusitfy-start mt-3 space-y-3">
                      <div>
                        <p className="font-normal text-xl leading-5 text-gray-700 md:mt-6 mt-4 min-h-60">
                          {product.title}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-xl leading-5 text-gray-800 mt-4">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
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
