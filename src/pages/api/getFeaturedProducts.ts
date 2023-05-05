import axios from "axios";

export async function getFeaturedProducts() {
  // TODO: fix the url later
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
}
