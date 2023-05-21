import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "@/features/Home/HomePage";
import { mockDataFromAPI } from "@/__test__/mock/api";
import { MockProvider } from "@/__test__/mock/context";

const mockProps = {
  featuredProductsData: mockDataFromAPI,
  productsCount: 8,
  setProductsCount: jest.fn(),
};

describe("home page", () => {
  it("should render child components properly", async () => {
    render(
      <MockProvider>
        <HomePage {...mockProps} />
      </MockProvider>
    );

    await waitFor(() => {
      const heroComponent = screen.getByTestId("hero");
      expect(heroComponent).toHaveTextContent(
        "Future E-commerce service is here"
      );
    });
  });
});
