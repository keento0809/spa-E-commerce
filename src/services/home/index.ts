import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/pages/api/getFeaturedProducts";
import { useState } from "react";
import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

interface FeaturedProductsQueryState {
  featuredProductsData: Product[];
  isLoading: boolean;
  error: unknown;
  productsCount: number;
  setProductCount: Dispatch<SetStateAction<number>>;
}

export function useFeaturedProductsQuery(): FeaturedProductsQueryState {
  const initialProductsCount = 8;
  const [productsCount, setProductCount] = useState(initialProductsCount);
  const {
    data: featuredProductsData,
    isLoading,
    error,
  } = useQuery(
    ["featuredProducts", productsCount],
    () => getFeaturedProducts({ productsCount }),
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      staleTime: 600000,
    }
  );

  return {
    featuredProductsData,
    isLoading,
    error,
    productsCount,
    setProductCount,
  };
}
