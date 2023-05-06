import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/pages/api/getProductDetail";
import { Product } from "@/types/product";

interface Props {
  id: string;
}

interface ProductDetailQueryState {
  productDetailData: Product;
  isLoading: boolean;
  error: unknown;
}

export function useProductDetailQuery({ id }: Props): ProductDetailQueryState {
  const {
    data: productDetailData,
    isLoading,
    error,
  } = useQuery(["productDetail", id], () => getProductDetail({ id }), {
    cacheTime: 10 * 60 * 1000,
    staleTime: 600000,
  });
  return {
    productDetailData,
    isLoading,
    error,
  };
}
