import { screen, render, waitFor } from "@testing-library/react";
import { MockProvider } from "@/__test__/__mocks__/context";
import ProductsList from "@/components/common/List/ProductsList";
import { readMockData } from "@/__test__/__mocks__/data";

describe("getFeaturedProducts", () => {
  it("renders data when API call is successfully done", async () => {
    const { mockProducts } = await readMockData();

    await render(
      <MockProvider>
        <ProductsList filteredProducts={mockProducts} />
      </MockProvider>
    );

    const mockProductTitle = await screen.findByText(
      /Solid Gold Petite Micropave/i
    );
    expect(mockProductTitle).toBeInTheDocument();

    await waitFor(async () => {});
  });
});
