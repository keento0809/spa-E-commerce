import { Product } from "@/types/product";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

interface Props {
  featuredProductsData: Product[];
  setProductsCount: Dispatch<SetStateAction<number>>;
}

export function useHomePage({ featuredProductsData, setProductsCount }: Props) {
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

  const handleLoadMoreProducts = () => {
    setProductsCount((prevState) => prevState + 4);
  };

  useEffect(() => {
    setFilteredProducts(featuredProductsData);
  }, [featuredProductsData]);

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
    handleLoadMoreProducts,
  };
}
