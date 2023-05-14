import Meta from "@/meta/Meta";
import { GetServerSideProps } from "next";

export default function Main() {
  return <Meta />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: "/home",
    },
    props: {} as never,
  };
};
