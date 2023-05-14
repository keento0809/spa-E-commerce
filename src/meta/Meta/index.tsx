import Head from "next/head";

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}

export default function Meta({
  title = "SPA Shop",
  keywords = "e-commerce, shopping",
  description = "next generation e-commerce",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keyword" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
}
