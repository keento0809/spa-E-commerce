import SearchBar from "@/components/common/SearchBar";
import useHomePage from "@/hooks/HomePage";
import { Product } from "@/types/product";
import Image from "next/image";
import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import { Dispatch, SetStateAction } from "react";

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
      <div className="2xl:mx-auto 2xl:container px-4 md:px-6 2xl:px-0 py-16 flex justify-center">
        <div className="">
          <div className="py-8 flex flex-row justify-between items-center">
            <div className="basis-1/2 max-w-md">
              <SearchBar onChange={handleChangeSearchResults} />
            </div>
            <div className="basis-1/2">
              <SelectCheckBoxGroup
                labels={labels}
                checkedItems={selectedCategories}
                onChange={handleSortByCategory}
              />
            </div>
          </div>
          <div className="flex justify-start items-start">
            <p className="text-3xl lg:text-4xl font-semibold leading-9">
              Featured items
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8">
            {filteredProducts?.map((product) => {
              return (
                <div key={product.id} className="flex items-start flex-col">
                  <div className="relative flex justify-center items-center bg-white py-12 px-16">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="object-cover max-h-96"
                    />
                    <button className="absolute top-4 right-4 flex justify-center items-center p-3.5 bg-white rounded-full">
                      <svg
                        className="fill-stroke text-gray-600 hover:text-gray-500"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00002 6.59999V5.39999C6.00002 4.44521 6.37931 3.52953 7.05444 2.8544C7.72957 2.17927 8.64525 1.79999 9.60003 1.79999V1.79999C10.5548 1.79999 11.4705 2.17927 12.1456 2.8544C12.8207 3.52953 13.2 4.44521 13.2 5.39999V6.59999M3.00002 6.59999C2.84089 6.59999 2.68828 6.6632 2.57576 6.77572C2.46324 6.88825 2.40002 7.04086 2.40002 7.19999V15.3C2.40002 16.434 3.36602 17.4 4.50002 17.4H14.7C15.834 17.4 16.8 16.4809 16.8 15.3469V7.19999C16.8 7.04086 16.7368 6.88825 16.6243 6.77572C16.5118 6.6632 16.3592 6.59999 16.2 6.59999H3.00002Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 8.40002V9.00002C6 9.9548 6.37928 10.8705 7.05442 11.5456C7.72955 12.2207 8.64522 12.6 9.6 12.6C10.5548 12.6 11.4705 12.2207 12.1456 11.5456C12.8207 10.8705 13.2 9.9548 13.2 9.00002V8.40002"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col items-start jusitfy-start mt-3 space-y-3">
                    <div>
                      <p className="text-lg font-medium leading-4 text-gray-800">
                        {product.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg leading-4 text-gray-400">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button onClick={handleLoadMoreProducts}>Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}
