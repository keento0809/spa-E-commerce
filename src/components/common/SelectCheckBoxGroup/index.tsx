import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";
import { ProductCategoryLabels } from "@/constants/labels";

interface Props {
  allCategoriesData: typeof ProductCategoryLabels;
  selectedCategories: SelectedCategoriesState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectCheckBoxGroup({
  allCategoriesData,
  selectedCategories,
  onChange,
}: Props) {
  return (
    <div>
      <ul className="items-center w-full text-sm font-medium text-gray-900 sm:flex dark:bg-gray-700 dark:text-white">
        {allCategoriesData?.map((label) => {
          return (
            <li key={label} className="w-full">
              <div className="flex items-center pl-3">
                <input
                  id={label}
                  type="checkbox"
                  value={label}
                  name={label}
                  checked={selectedCategories[label] ?? false}
                  className="w-4 h-4 bg-gray-100 rounded dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 cursor-pointer"
                  onChange={onChange}
                />
                <label
                  htmlFor={label}
                  className="w-full py-4 ml-2 text-sm font-light text-gray-900 dark:text-gray-300 cursor-pointer"
                >
                  {label}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
