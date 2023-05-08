import RatingBar from "@/components/common/RatingBar";
import { Button } from "@/components/common/Button";
import { ProductProps } from "@/types/product";
import Link from "next/link";

export default function ProductInfoSection({ product }: ProductProps) {
  return (
    <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
      <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-xs lg:text-base leading-4 text-gray-600">
        Home / {product.category}
      </p>
      <h2 className="font-semibold text-xl lg:text-4xl lg:leading-9 leading-6 text-gray-800 mt-4">
        {product.title}
      </h2>
      <div className="mt-5">
        <RatingBar rating={product.rating.rate} />
      </div>

      <p className=" font-normal text-sm lg:text-base leading-5 lg:leading-6 text-gray-600 mt-7">
        {product.description}
      </p>
      <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
        $ {product.price}
      </p>

      <div className="lg:mt-11 mt-10">
        <div className="flex flex-row justify-between items-center">
          <p className="font-medium text-sm lg:text-base leading-4 text-gray-600">
            Select quantity
          </p>
          <div className="flex justify-center items-center">
            <span className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
              -
            </span>
            <input
              id="counter"
              aria-label="input"
              className="border border-gray-300 h-7 text-center w-14"
              type="text"
              value={0}
              onChange={(e) => e.target.value}
            />
            <span className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
              +
            </span>
          </div>
        </div>
        <hr className=" bg-gray-200 w-full my-2" />
        <div className="mt-12 md:text-center lg:text-start">
          <Link href={"/#featuredProducts"}>
            <Button text="Back" />
          </Link>
        </div>
      </div>
    </div>
  );
}
