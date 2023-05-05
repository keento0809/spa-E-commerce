import HomePage from "@/features/Home/HomePage";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { getFeaturedProducts } from "../api/getFeaturedProducts";
import { useFeaturedProductsQuery } from "@/services/home";

export default function Home() {
  const {
    data: featuredProductsData,
    isLoading,
    error,
  } = useFeaturedProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <HomePage featuredProductsData={featuredProductsData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // prefetch data on the server
  await queryClient.prefetchQuery(["featuredProducts"], getFeaturedProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
