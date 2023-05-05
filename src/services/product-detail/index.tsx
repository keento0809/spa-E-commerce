import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/pages/api/getProductDetail";

export function useProductDetailQuery(id: any) {
  return useQuery(["productDetail"], () => getProductDetail(id));
}
