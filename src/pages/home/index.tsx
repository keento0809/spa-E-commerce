import HomePage from "@/features/Home/HomePage";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { getFeaturedProducts } from "../api/getFeaturedProducts";
import { useFeaturedProductsQuery } from "@/services/home";
import Loader from "@/components/common/Loader";

export default function Home() {
  const {
    featuredProductsData,
    isLoading,
    error,
    productsCount,
    setProductCount,
  } = useFeaturedProductsQuery();

  if (isLoading)
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );
  if (error) return <div>Error!</div>;

  return (
    <>
      <HomePage
        featuredProductsData={featuredProductsData}
        productsCount={productsCount}
        setProductsCount={setProductCount}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // prefetch data on the server
  await queryClient.prefetchQuery(["featuredProducts"], () =>
    getFeaturedProducts({ productsCount: 8 })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
