import { screen, render, waitFor } from "@testing-library/react";
import HomePage from "@/features/Home/HomePage";
import { mockDataFromAPI } from "@/__test__/mock/api";
import { MockProvider } from "@/__test__/mock/context";
import { mockServer } from "@/__test__/mock/api";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

const mockProps = {
  featuredProductsData: mockDataFromAPI,
  productsCount: 8,
  setProductsCount: jest.fn(),
};

describe("getAllCategories", () => {
  it("renders data when API call is successfully done", async () => {
    await render(
      <MockProvider>
        <HomePage {...mockProps} />
      </MockProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Mock product")).toBeInTheDocument();
    });
  });
});
