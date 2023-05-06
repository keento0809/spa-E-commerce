import axios from "axios";

interface Props {
  productsCount: number;
}

export async function getFeaturedProducts({ productsCount }: Props) {
  // TODO: fix the url later
  const response = await axios.get(
    `https://fakestoreapi.com/products?limit=${productsCount}`
  );
  return response.data;
}
