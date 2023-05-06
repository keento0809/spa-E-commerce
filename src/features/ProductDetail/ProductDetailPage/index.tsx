import { Product } from "@/types/product";
import Link from "next/link";
import ProductImageSection from "./ProductImageSection";
import ProductInfoSection from "./ProductInfoSection";

interface Props {
  productDetailData: Product;
}

export default function ProductDetailPage({ productDetailData }: Props) {
  const product = productDetailData;

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 h-screen">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8 pt-6">
        <section className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <ProductInfoSection product={product} />
        </section>

        <section className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex justify-center items-center lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <ProductImageSection product={product} />
        </section>
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
