import { GlobalLoadingProvider } from "@/contexts/GlobalLoadingContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockProvider = ({ children }: Props) => {
  return (
    <GlobalLoadingProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </GlobalLoadingProvider>
  );
};

export { MockProvider };
