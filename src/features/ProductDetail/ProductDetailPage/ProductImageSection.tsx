import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductImageSection({ product }: Props) {
  return (
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
  );
}
