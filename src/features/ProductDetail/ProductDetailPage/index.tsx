import RatingBar from "@/components/common/RatingBar";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  productDetailData: Product;
}

export default function ProductDetailPage({ productDetailData }: Props) {
  const product = productDetailData;
  // TODO: probably delete them later?
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 h-screen">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8 pt-6">
        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
            Home / {product.category}
          </p>
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
            {product.title}
          </h2>

          <div className="mt-5">
            <RatingBar rating={product.rating.rate} />
          </div>

          <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
            {product.description}
          </p>
          <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
            $ {product.price}
          </p>

          <div className="lg:mt-11 mt-10">
            <div className="flex flex-row justify-between">
              <p className=" font-medium text-base leading-4 text-gray-600">
                Select quantity
              </p>
              <div className="flex justify-center items-center">
                <span
                  onClick={minusCount}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                >
                  -
                </span>
                <input
                  id="counter"
                  aria-label="input"
                  className="border border-gray-300 h-7 text-center w-14"
                  type="text"
                  value={count}
                  onChange={(e) => e.target.value}
                />
                <span
                  onClick={addCount}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                >
                  +
                </span>
              </div>
            </div>
            <hr className=" bg-gray-200 w-full my-2" />
          </div>

          <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 px-12 py-5 lg:mt-12 mt-6">
            Add to shopping bag
          </button>
        </div>

        <div className=" w-full sm:w-96 md:w-8/12 lg:w-6/12 flex justify-center items-center lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className="bg-white px-6 py-12">
            <div className="flex justify-center items-center w-80 h-500">
              <Image
                src={product.image}
                alt="product-image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={"/#featuredProducts"}
          className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full md:mt-12 mt-10 text-white font-medium text-base leading-4"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
