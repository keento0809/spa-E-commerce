import TestProductGrid from "@/features/Home/test";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { getAllCategories } from "../api/getAllCategories";

export default function Test() {
  const { data, isLoading, error } = useQuery(
    ["allCategories"],
    getAllCategories
  );
  console.log(data);
  return (
    <>
      <TestProductGrid />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["allCategories"], getAllCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
