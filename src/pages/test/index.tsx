import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import { getAllCategories } from "../api/getAllCategories";
import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";

export default function Test() {
  // TODO: fix this later
  const { data, isLoading, error } = useQuery(
    ["allCategories"],
    getAllCategories
  );
  console.log(data);
  return (
    <>
      <SelectCheckBoxGroup labels={data} />
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
