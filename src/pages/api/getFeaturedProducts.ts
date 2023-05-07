import axios from "axios";

interface Props {
  productsCount: number;
}

export async function getFeaturedProducts({ productsCount }: Props) {
  const response = await axios.get(
    `https://fakestoreapi.com/products?limit=${productsCount}`
  );
  return response.data;
}
