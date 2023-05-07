import { Product } from "@/types/product";
import Link from "next/link";
import ProductImageSection from "./ProductImageSection";
import ProductInfoSection from "./ProductInfoSection";
import { Button } from "@/components/common/Button";

interface Props {
  productDetailData: Product;
}

export default function ProductDetailPage({ productDetailData }: Props) {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 h-screen">
      <section className="flex justify-center items-center lg:flex-row flex-col gap-8 pt-6">
        <ProductInfoSection product={productDetailData} />
        <ProductImageSection product={productDetailData} />
      </section>
      <section className="flex justify-center items-center mt-8">
        <Link href={"/#featuredProducts"}>
          <Button text="Back" />
        </Link>
      </section>
    </div>
  );
}
