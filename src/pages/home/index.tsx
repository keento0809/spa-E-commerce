import HomePage from "@/features/Home/HomePage";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { getFeaturedProducts } from "../api/getFeaturedProducts";
import { useFeaturedProductsQuery } from "@/services/home";
import Loader from "@/components/common/Loader";
import { useGlobalLoadingContext } from "@/contexts/GlobalLoadingContext/context";

export default function Home() {
  const { featuredProductsData, isLoading, error, setProductCount } =
    useFeaturedProductsQuery();
  const { isGlobalLoading } = useGlobalLoadingContext();
  console.log("isGL: ", isGlobalLoading);

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
