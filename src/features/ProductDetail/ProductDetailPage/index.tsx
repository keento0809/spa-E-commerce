import { Product } from "@/types/product";

interface Props {
  productDetailData: Product;
}

export default function ProductDetailPage({ productDetailData }: Props) {
  const product = productDetailData;
  return (
    <div>
      ProductDetailPage
      <div key={product.id}>
        <h2>{product.title}</h2>
        <img src={product.image} alt="product" />
        <p>{product.description}</p>
      </div>
    </div>
  );
}
