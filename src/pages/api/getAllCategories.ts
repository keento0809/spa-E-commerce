import axios from "axios";

export async function getAllCategories() {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
}
