import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import { SearchBar } from "@/components/common/SearchBar";
import { ProductCategoryLabels } from "@/constants/labels";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";

interface Props {
  handleChangeSearchResults: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  allCategoriesData: typeof ProductCategoryLabels;
  selectedCategories: SelectedCategoriesState;
  handleSortByCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterSettings({
  handleChangeSearchResults,
  allCategoriesData,
  selectedCategories,
  handleSortByCategory,
}: Props) {
  return (
    <div>
      <div id="featuredProducts" className="h-28"></div>
      <div className="text-center pb-12">
        <p className="text-2xl lg:text-4xl font-bold tracking-tight leading-9">
          Featured Products
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-center">
          <div className="lg:basis-1/2 max-w-md min-w-[304px]">
            <SearchBar onChange={handleChangeSearchResults} />
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="lg:basis-1/2 md:min-w-[600px]">
            <SelectCheckBoxGroup
              allCategoriesData={allCategoriesData}
              selectedCategories={selectedCategories}
              onChange={handleSortByCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
