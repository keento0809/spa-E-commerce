import Image from "next/image";
import { ProductProps } from "@/types/product";

export default function ProductImageSection({ product }: ProductProps) {
  return (
    <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex justify-center items-center lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
      <div className="bg-white px-6 py-12">
        <div className="flex justify-center items-center w-80 h-500">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
