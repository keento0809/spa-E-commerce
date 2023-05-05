import ProductDetailPage from "@/features/ProductDetail/ProductDetailPage";
import { getProductDetail } from "@/pages/api/getProductDetail";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps, GetStaticPaths } from "next";
import { useProductDetailQuery } from "@/services/product-detail";
import { useRouter } from "next/router";
import { getAllProducts } from "@/pages/api/getAllProducts";
import { Product } from "@/types/product";
import { ParsedUrlQuery } from "querystring";

export default function ProductDetail() {
  const { query } = useRouter();
  const id = query.id;

  const {
    data: productDetailData,
    isLoading,
    error,
  } = useProductDetailQuery({ id });

  if (isLoading) return <div>Loading...</div>;
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
      getProductDetail(id)
    );
  }

  return {
    props: {
      // dehydrate query cache
      dehydrateState: dehydrate(queryClient),
    },
  };
};
