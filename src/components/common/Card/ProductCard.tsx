import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div key={product.id} className="flex items-start flex-col">
      <div className="relative group">
        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-500 via-slate-200 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full z-30"></div>
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
}
