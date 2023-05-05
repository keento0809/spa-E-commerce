import { FeaturedProduct } from "@/types/featuredProducts";

interface Props {
  featuredProductsData: FeaturedProduct[];
}

export default function HomePage({ featuredProductsData }: Props) {
  return (
    <div>
      <h3>HomePage</h3>
      <div>
        {featuredProductsData.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} alt="product" />
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
