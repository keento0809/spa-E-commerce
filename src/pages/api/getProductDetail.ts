import axios from "axios";

interface Props {
  id: string;
}

export async function getProductDetail({ id }: Props) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
}
