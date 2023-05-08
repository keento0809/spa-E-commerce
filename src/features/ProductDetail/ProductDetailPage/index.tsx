import { Product } from "@/types/product";
import ProductImageSection from "./ProductImageSection";
import ProductInfoSection from "./ProductInfoSection";

interface Props {
  productDetailData: Product;
}

// Contents of product-detail page
export default function ProductDetailPage({ productDetailData }: Props) {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 min-h-screen">
      <section className="flex justify-center items-center lg:flex-row flex-col-reverse gap-8 pt-6">
        <ProductInfoSection product={productDetailData} />
        <ProductImageSection product={productDetailData} />
      </section>
    </div>
  );
}
