import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Main() {
  return (
    <>
      <Head>
        <title>SPA Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
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
