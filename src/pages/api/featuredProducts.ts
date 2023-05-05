import axios from "axios";

export async function getFeaturedProducts() {
  const response = await axios.get("https://fakestoreapi.com/products?limit=5");
  return response.data;
}
