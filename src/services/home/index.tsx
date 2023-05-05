import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/pages/api/getFeaturedProducts";

export function useFeaturedProductsQuery() {
  return useQuery(["featuredProducts"], getFeaturedProducts, {
    cacheTime: 10 * 60 * 1000,
    staleTime: 600000,
  });
}
