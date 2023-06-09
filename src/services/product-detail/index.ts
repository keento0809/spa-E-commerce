import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/pages/api/getProductDetail";
import { Product } from "@/types/product";
import { useCallback } from "react";
import { IdProps } from "@/types";

interface ProductDetailQueryState {
  productDetailData: Product;
  isLoading: boolean;
  error: unknown;
}

export function useProductDetailQuery({
  id,
}: IdProps): ProductDetailQueryState {
  const getProductDetailWithUseCallback = useCallback(
    () => getProductDetail({ id }),
    [id]
  );
  const {
    data: productDetailData,
    isLoading,
    error,
  } = useQuery(["productDetail", id], getProductDetailWithUseCallback, {
    cacheTime: 10 * 60 * 1000,
    staleTime: 600000,
  });
  return {
    productDetailData,
    isLoading,
    error,
  };
}
