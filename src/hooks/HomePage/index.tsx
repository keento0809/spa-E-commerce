import { Product } from "@/types/product";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";
import { useEffect, useState } from "react";

interface Props {
  featuredProductsData: Product[];
}

export default function useHomePage({ featuredProductsData }: Props) {
  const [filteredProducts, setFilteredProducts] =
    useState(featuredProductsData);
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategoriesState>({});

  const handleChangeSearchResults = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilteredProducts(
      featuredProductsData.filter((p) =>
        p.title.toLowerCase().includes(event.target.value)
      )
    );
  };

  const handleSortByCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedCategories[event.target.name]) {
      delete selectedCategories[event.target.name];
      setSelectedCategories({ ...selectedCategories });
    } else {
      setSelectedCategories({
        ...selectedCategories,
        [event.target.name]: event.target.checked,
      });
    }
  };

  useEffect(() => {
    if (Object.values(selectedCategories).length > 0) {
      setFilteredProducts(
        featuredProductsData.filter((p) => selectedCategories[p.category])
      );
    } else {
      setFilteredProducts(featuredProductsData);
    }
  }, [selectedCategories]);

  return {
    filteredProducts,
    selectedCategories,
    handleChangeSearchResults,
    handleSortByCategory,
  };
}

const dArray = [
  {
    id: 1,
    name: "aaa",
    category: "fruits",
  },
  {
    id: 2,
    name: "bbb",
    category: "meet",
  },
  {
    id: 3,
    name: "ccc",
    category: "vegetable",
  },
  {
    id: 4,
    name: "ddd",
    category: "fruits",
  },
];

const selectedC = {
  fruits: true,
};
