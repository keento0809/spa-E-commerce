import { Product } from "@/types/product";
import ProductCard from "../Card/ProductCard";

interface Props {
  filteredProducts: Product[];
}

export default function ProductsList({ filteredProducts }: Props) {
  return (
    <>
      {filteredProducts.length === 0 && (
        <div className="py-8 text-xl font-semibold text-center w-full h-96">
          No Products Found...
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-12 lg:gap-y-16 gap-x-8">
        {filteredProducts.length !== 0 &&
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}
