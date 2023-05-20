import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { screen, render } from "@testing-library/react";
import HomePage from "@/features/Home/HomePage";
import { GlobalLoadingProvider } from "@/contexts/GlobalLoadingContext";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/getFeaturedProducts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
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
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

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

describe("getAllCategories", () => {
  it("renders data when API call is successfully done", async () => {
    render(
      <GlobalLoadingProvider>
        <QueryClientProvider client={queryClient}>
          <HomePage {...mockProps} />
        </QueryClientProvider>
      </GlobalLoadingProvider>
    );

    await screen.findByTestId("Mock product");
    expect(screen.getByText("Mock product")).toBeInTheDocument();
  });
});
