import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/pages/api/getFeaturedProducts";
import { useState } from "react";

export function useFeaturedProductsQuery() {
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
    setProductCount,
  };
}
