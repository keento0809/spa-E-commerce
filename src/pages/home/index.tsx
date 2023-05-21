import HomePage from "@/features/Home/HomePage";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getFeaturedProducts } from "../api/getFeaturedProducts";
import { useFeaturedProductsQuery } from "@/services/home";
import Loader from "@/components/common/Loader";
import Meta from "@/meta/Meta";

// Routing for home page
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
      <>
        <Meta title="Loading" />
        <div className="h-screen">
          <Loader />
        </div>
      </>
    );
  if (error) return <div className="h-screen">Error!</div>;

  return (
    <>
      <Meta />
      <HomePage
        featuredProductsData={featuredProductsData}
        productsCount={productsCount}
        setProductsCount={setProductCount}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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
