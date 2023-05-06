import ProductDetailPage from "@/features/ProductDetail/ProductDetailPage";
import { getProductDetail } from "@/pages/api/getProductDetail";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticProps, GetStaticPaths } from "next";
import { useProductDetailQuery } from "@/services/product-detail";
import { useRouter } from "next/router";
import { getAllProducts } from "@/pages/api/getAllProducts";
import { Product } from "@/types/product";
import Loader from "@/components/common/Loader";

export default function ProductDetail() {
  const { query } = useRouter();

  // To follow type guard and make sure the type of parameter for useProductDetailQuery is string,
  // Implement these steps below
  let id!: string;
  if (typeof query.id === "string") id = query.id;

  const { productDetailData, isLoading, error } = useProductDetailQuery({ id });

  if (isLoading)
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );
  if (error) return <div>Error!</div>;

  return (
    <>
      <ProductDetailPage productDetailData={productDetailData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((product: Product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
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
