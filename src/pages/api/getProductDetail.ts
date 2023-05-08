import axios from "axios";
import { IdProps } from "@/types";

export async function getProductDetail({ id }: IdProps) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
}
