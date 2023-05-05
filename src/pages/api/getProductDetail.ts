import axios from "axios";

export async function getProductDetail(id: string) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
}
