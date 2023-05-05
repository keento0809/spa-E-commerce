import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/pages/api/getProductDetail";

// TODO: fix any type later
interface Props {
  id: any;
}

export function useProductDetailQuery({ id }: Props) {
  return useQuery(["productDetail", id], () => getProductDetail(id), {
    cacheTime: 10 * 60 * 1000,
    staleTime: 600000,
  });
}
