import SelectCheckBoxGroup from "@/components/common/SelectCheckBoxGroup";
import SearchBar from "@/components/common/SearchBar";
import { productCategoryLabel } from "@/constants/labels";
import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";

interface Props {
  handleChangeSearchResults: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  allCategoriesData: typeof productCategoryLabel;
  checkedItems: SelectedCategoriesState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterSettings({
  handleChangeSearchResults,
  allCategoriesData,
  checkedItems,
  onChange,
}: Props) {
  return (
    <>
      <div id="featuredProducts" className="h-28"></div>
      <div className="text-center pb-12">
        <p className="text-3xl lg:text-4xl font-semibold leading-9">
          Featured Products
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-center">
          <div className="basis-1/2 max-w-md">
            <SearchBar onChange={handleChangeSearchResults} />
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="basis-1/2">
            <SelectCheckBoxGroup
              allCategoriesData={allCategoriesData}
              checkedItems={checkedItems}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
