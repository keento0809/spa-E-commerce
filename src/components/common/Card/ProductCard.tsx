import { ProductProps } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import DetailButton from "../Button/DetailButton";

export default function ProductCard({ product }: ProductProps) {
  return (
    <div key={product.id} className="flex items-center md:items-start flex-col">
      <div className="relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-500 via-slate-200 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full z-20"></div>

        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 z-50">
          <Link href={`/product-detail/${product.id}`}>
            <DetailButton text="Detail" />
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
      <div className="flex flex-col items-center md:items-start justify-start mt-3 space-y-3 max-w-[304px]">
        <div>
          <p
            data-testid={product.title}
            className="font-normal text-center text-xl leading-6 text-gray-600 md:mt-6 mt-4 min-h-60"
          >
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
}
