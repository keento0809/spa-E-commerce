import ProductDetailPage from "@/features/ProductDetail/ProductDetailPage";
import { getProductDetail } from "@/pages/api/getProductDetail";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useProductDetailQuery } from "@/services/product-detail";
import { useRouter } from "next/router";
import Loader from "@/components/common/Loader";
import Meta from "@/meta/Meta";

// Routing for product-detail page
export default function ProductDetail() {
  const { query } = useRouter();

  // To follow type guard and make sure the type of parameter for useProductDetailQuery is string,
  // Implement these steps below
  let id!: string;
  if (typeof query.id === "string") id = query.id;

  const { productDetailData, isLoading, error } = useProductDetailQuery({ id });

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
      <Meta title={`${productDetailData.title}`} />
      <ProductDetailPage productDetailData={productDetailData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  const { id } = ctx.params!;

  // prefetch data on the server
  if (typeof id === "string") {
    await queryClient.prefetchQuery(["productDetail", id], () =>
      getProductDetail({ id })
    );
  }

  return {
    props: {
      // dehydrate query cache
      dehydrateState: dehydrate(queryClient),
    },
  };
};
