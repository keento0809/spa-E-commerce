import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "@/features/Home/HomePage";
import { mockDataFromAPI } from "@/__test__/mock/api";
import { MockProvider } from "@/__test__/mock/context";

const mockProps = {
  featuredProductsData: mockDataFromAPI,
  productsCount: 8,
  setProductsCount: jest.fn(),
};

const MockRenderHomePage = () => {
  return (
    <MockProvider>
      <HomePage {...mockProps} />
    </MockProvider>
  );
};

describe("home page", () => {
  it("should display hero title properly", async () => {
    await render(<MockRenderHomePage />);

    await waitFor(() => {
      const heroComponent = screen.getByRole("heroTitle");
      expect(heroComponent).toBeInTheDocument();
    });
  });

  it("should render productList component properly", async () => {
    await render(<MockRenderHomePage />);

    await waitFor(() => {
      const productList = screen.getByRole("list");
      expect(productList).toBeInTheDocument();
    });
  });

  it("should render load more button component properly", async () => {
    await render(<MockRenderHomePage />);

    await waitFor(() => {
      const loadMoreButton = screen.getByRole("button", { name: "Load More" });
      expect(loadMoreButton).toHaveTextContent("Load More");
    });
  });
});
