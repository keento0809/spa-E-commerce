import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/pages/api/getProductDetail";

// TODO: fix any type later
interface Props {
  id: any;
}

export function useProductDetailQuery({ id }: Props) {
  const {
    data: productDetailData,
    isLoading,
    error,
  } = useQuery(["productDetail", id], () => getProductDetail(id), {
    cacheTime: 10 * 60 * 1000,
    staleTime: 600000,
  });
  return {
    productDetailData,
    isLoading,
    error,
  };
}
