import { screen, render, waitFor } from "@testing-library/react";
import { MockProvider } from "@/__test__/__mocks__/context";
import HomePage from "@/features/Home/HomePage";
import { readMockData } from "@/__test__/__mocks__/data";
import { mockServer } from "@/__test__/__mocks__/api/server";

describe("getAllCategories", () => {
  it("renders data when API call is successfully done", async () => {
    mockServer.listen();

    const { mockProducts } = await readMockData();

    const mockProps = {
      featuredProductsData: mockProducts,
      productsCount: 8,
      setProductsCount: jest.fn(),
    };
    await render(
      <MockProvider>
        <HomePage {...mockProps} />
      </MockProvider>
    );

    await waitFor(() => {
      const mockProductTitle = screen.getByRole("heading", {
        name: /Solid Gold Petite Micropave/i,
      });
      expect(mockProductTitle).toBeInTheDocument();
    });

    mockServer.close();
    // expect(mockServer.getHandledRequests()).toHaveLength(1);
    // expect(mockServer.getHandledRequests()[0].url).toEqual(
    //   "http://localhost:3000/api/getFeaturedProducts"
    // );
  });
});
