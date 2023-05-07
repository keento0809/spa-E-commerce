import { Product } from "@/types/product";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useGlobalLoadingContext } from "@/contexts/GlobalLoadingContext/context";
import { getAllCategories } from "@/pages/api/getAllCategories";
import { useQuery } from "@tanstack/react-query";
import { productCategoryLabel } from "@/constants/labels";

interface Props {
  featuredProductsData: Product[];
  setProductsCount: Dispatch<SetStateAction<number>>;
}

interface HomePageState {
  filteredProducts: Product[];
  selectedCategories: SelectedCategoriesState;
  allCategoriesData: typeof productCategoryLabel;
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
    useState<Product[]>(featuredProductsData);
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategoriesState>({});
  const { setIsGlobalLoading, isGlobalLoading } = useGlobalLoadingContext();

  const { data: allCategoriesData } = useQuery(
    ["allCategories"],
    getAllCategories,
    {
      keepPreviousData: true,
      cacheTime: 10 * 60 * 1000,
      staleTime: 600000,
    }
  );

  //
  function handleChangeSearchResults(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setFilteredProducts(
      featuredProductsData.filter((p) =>
        p.title.toLowerCase().includes(event.target.value)
      )
    );
  }

  function handleSortByCategory(event: React.ChangeEvent<HTMLInputElement>) {
    if (selectedCategories[event.target.name]) {
      delete selectedCategories[event.target.name];
      setSelectedCategories({ ...selectedCategories });
    } else {
      setSelectedCategories({
        ...selectedCategories,
        [event.target.name]: event.target.checked,
      });
    }
  }

  function handleLoadMoreProducts() {
    setIsGlobalLoading(true);
    setProductsCount((prevState) => prevState + 4);
  }

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
    allCategoriesData,
    handleChangeSearchResults,
    handleSortByCategory,
    handleLoadMoreProducts,
  };
}
