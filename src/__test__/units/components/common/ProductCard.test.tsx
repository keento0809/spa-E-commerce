import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/common/Card/ProductCard";
import { Product } from "@/types/product";

describe("ProductCard", () => {
  it("should render contents", async () => {
    // define mock data
    const mockProductProps: Product = {
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
    };

    // render components
    render(<ProductCard product={mockProductProps} />);

    // get DOM
    const detailButton = screen.getByRole("button");
    const productImage = screen.getByRole("img");

    expect(detailButton).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
  });
});
