import SearchBar from "@/components/common/SearchBar";
import { useHomePage } from "@/hooks/HomePage";
import { Product } from "@/types/product";
import Image from "next/image";
import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Hero from "@/components/common/Hero";

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

  // TODO: delete this later
  const labels = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <>
      <div className="2xl:mx-auto 2xl:container px-4 md:px-6 2xl:px-0 pb-16 flex justify-center">
        <div className="w-full max-w-screen-2xl">
          <Hero />
          <div className="pt-20 pb-8">
            <div id="featuredProducts" className="h-28"></div>
            <div className="text-center pb-12">
              <p className="text-3xl lg:text-4xl font-semibold leading-9">
                Featured Products
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <div className="basis-1/2 max-w-md">
                  <SearchBar onChange={handleChangeSearchResults} />
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <div className="basis-1/2">
                  <SelectCheckBoxGroup
                    labels={labels}
                    checkedItems={selectedCategories}
                    onChange={handleSortByCategory}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-8 gap-x-8">
            {filteredProducts.length === 0 ? (
              <div className="py-8">No Products Found...</div>
            ) : (
              filteredProducts.map((product) => {
                return (
                  <div key={product.id} className="flex items-start flex-col">
                    <div className="relative group">
                      <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-500 via-slate-200 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full z-50"></div>
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
              })
            )}
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
