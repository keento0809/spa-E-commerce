import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { GlobalLoadingProvider } from "@/contexts/GlobalLoadingContext";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <GlobalLoadingProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </GlobalLoadingProvider>
    </>
  );
}
