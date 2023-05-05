import { Product } from "@/types/product";
import { useState } from "react";

interface Props {
  featuredProductsData: Product[];
}

export default function useHomePage({ featuredProductsData }: Props) {
  const [filteredProducts, setFilteredProducts] =
    useState(featuredProductsData);

  const handleChangeSearchResults = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilteredProducts(
      featuredProductsData.filter((p) =>
        p.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  return {
    filteredProducts,
    handleChangeSearchResults,
  };
}
