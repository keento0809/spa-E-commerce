import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "@/features/Home/HomePage";
import { Hero } from "@/components/common/Hero";
import { GlobalLoadingProvider } from "@/contexts/GlobalLoadingContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Define mock data
const mockData = [
  {
    category: "jewelery",
    description: "This is a mock product",
    id: 0,
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    price: 0,
    rating: {
      count: 0,
      rate: 3,
    },
    title: "Mock product",
  },
];

const mockProps = {
  featuredProductsData: mockData,
  productsCount: 8,
  setProductsCount: jest.fn(),
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("home page", () => {
  it("should render child components properly", async () => {
    render(
      <GlobalLoadingProvider>
        <QueryClientProvider client={queryClient}>
          <HomePage {...mockProps} />
        </QueryClientProvider>
      </GlobalLoadingProvider>
    );

    await waitFor(() => {
      const heroComponent = screen.getByTestId("hero");
      expect(heroComponent).toHaveTextContent(
        "Future E-commerce service is here"
      );
    });
  });
});
