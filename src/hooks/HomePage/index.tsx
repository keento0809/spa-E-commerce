import { Product } from "@/types/product";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useGlobalLoadingContext } from "@/contexts/GlobalLoadingContext/context";

interface Props {
  featuredProductsData: Product[];
  setProductsCount: Dispatch<SetStateAction<number>>;
}

interface HomePageState {
  filteredProducts: Product[];
  selectedCategories: SelectedCategoriesState;
  handleChangeSearchResults: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSortByCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoadMoreProducts: () => void;
}

export function useHomePage({
  featuredProductsData,
  setProductsCount,
}: Props): HomePageState {
  const [filteredProducts, setFilteredProducts] =
    useState(featuredProductsData);
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategoriesState>({});
  const { setIsGlobalLoading, isGlobalLoading } = useGlobalLoadingContext();

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
    setIsGlobalLoading(true);
    setProductsCount((prevState) => prevState + 4);
  };

  useEffect(() => {
    setFilteredProducts(featuredProductsData);
    isGlobalLoading && setIsGlobalLoading(false);
  }, [featuredProductsData]);

  useEffect(() => {
    if (Object.values(selectedCategories).length > 0) {
      const categorizedProductsData = featuredProductsData.filter(
        (p) => selectedCategories[p.category]
      );
      categorizedProductsData.length > 0
        ? setFilteredProducts(categorizedProductsData)
        : setFilteredProducts([]);
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
