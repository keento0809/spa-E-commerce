import { Product } from "@/types/product";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";
import {
  useEffect,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { useGlobalLoadingContext } from "@/contexts/GlobalLoadingContext/context";
import { getAllCategories } from "@/pages/api/getAllCategories";
import { useQuery } from "@tanstack/react-query";
import { ProductCategoryLabels } from "@/constants/labels";

interface Props {
  featuredProductsData: Product[];
  productsCount: number;
  setProductsCount: Dispatch<SetStateAction<number>>;
}

interface HomePageState {
  filteredProducts: Product[];
  selectedCategories: SelectedCategoriesState;
  allCategoriesData: typeof ProductCategoryLabels;
  isLoading: boolean;
  error: unknown;
  handleChangeSearchResults: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSortByCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoadMoreProducts: () => void;
}

export function useHomePage({
  featuredProductsData,
  productsCount,
  setProductsCount,
}: Props): HomePageState {
  // React state having filtered products by product name or category
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(featuredProductsData);
  // React state having selected categories
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategoriesState>({});

  const { setIsGlobalLoading, isGlobalLoading } = useGlobalLoadingContext();

  const getAllCategoriesWithUseCallback = useCallback(getAllCategories, []);

  const {
    data: allCategoriesData,
    isLoading,
    error,
  } = useQuery(["allCategories"], getAllCategoriesWithUseCallback, {
    keepPreviousData: true,
    cacheTime: 10 * 60 * 1000,
    staleTime: 600000,
  });

  // Number of product for adding additionally when uses click load more button
  const DEFAULT_ADDITIONAL_PRODUCTS_COUNT = 4;

  // Function updating products filtered by input
  const handleChangeSearchResults = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilteredProducts(
        featuredProductsData.filter((p) =>
          p.title.toLowerCase().includes(event.target.value)
        )
      );
    },
    [filteredProducts]
  );

  // Helper function updating filtered products based on the selected categories
  const handleUpdateFilteredProducts = (
    updatedSelectedCategories: SelectedCategoriesState
  ) => {
    if (Object.values(updatedSelectedCategories).length > 0) {
      const categorizedProductsData = featuredProductsData.filter(
        (p) => updatedSelectedCategories[p.category]
      );
      categorizedProductsData.length > 0
        ? setFilteredProducts(categorizedProductsData)
        : setFilteredProducts([]);
    } else {
      setFilteredProducts(featuredProductsData);
    }
  };

  // Function updating products filtered by selected categories
  const handleSortByCategory = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (selectedCategories[event.target.name]) {
        delete selectedCategories[event.target.name];
        setSelectedCategories({ ...selectedCategories });

        const updatedSelectedCategories = {
          ...selectedCategories,
        };
        handleUpdateFilteredProducts(updatedSelectedCategories);
      } else {
        setSelectedCategories({
          ...selectedCategories,
          [event.target.name]: event.target.checked,
        });

        const updatedSelectedCategories = {
          ...selectedCategories,
          [event.target.name]: event.target.checked,
        };
        handleUpdateFilteredProducts(updatedSelectedCategories);
      }
    },
    [selectedCategories]
  );

  // Function implementing pagination (load more products)
  const handleLoadMoreProducts = useCallback(() => {
    setIsGlobalLoading(true);
    setProductsCount(
      (prevState) => prevState + DEFAULT_ADDITIONAL_PRODUCTS_COUNT
    );
  }, [productsCount]);

  useEffect(() => {
    setFilteredProducts(featuredProductsData);
    isGlobalLoading && setIsGlobalLoading(false);
  }, [featuredProductsData]);

  return {
    filteredProducts,
    selectedCategories,
    allCategoriesData,
    isLoading,
    error,
    handleChangeSearchResults,
    handleSortByCategory,
    handleLoadMoreProducts,
  };
}
