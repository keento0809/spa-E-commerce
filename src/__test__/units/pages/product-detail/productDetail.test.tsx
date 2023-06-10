import { MockProductDetailData } from "@/__test__/__mocks__/data/product";
import ProductDetailPage from "@/features/ProductDetail/ProductDetailPage";
import { Product } from "@/types/product";
import { screen, render } from "@testing-library/react";

interface MockProps {
  productDetailData: Product;
}

const mockProps: MockProps = {
  productDetailData: MockProductDetailData,
};

describe("productDetail page", () => {
  it("should render back button component correctly", () => {
    render(<ProductDetailPage {...mockProps} />);

    const backButton = screen.getByRole("button", { name: /Back/i });
    expect(backButton).toBeInTheDocument();
  });

  it("should display product image properly", () => {
    render(<ProductDetailPage {...mockProps} />);

    const productImage = screen.getByRole("img");
    expect(productImage).toBeInTheDocument();
  });

  it("should display product title properly", () => {
    render(<ProductDetailPage {...mockProps} />);

    const productTitle = screen.getByText(
      `${mockProps.productDetailData.title}`
    );
    expect(productTitle).toBeInTheDocument();
  });
});
