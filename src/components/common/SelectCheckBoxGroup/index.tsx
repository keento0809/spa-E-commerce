import { SelectedCategoriesState } from "@/types/selectedCheckBoxGroup";

interface Props {
  labels: string[];
  checkedItems: SelectedCategoriesState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectCheckBoxGroup({
  labels,
  checkedItems,
  onChange,
}: Props) {
  return (
    <div>
      <ul className="items-center w-full text-sm font-medium text-gray-900 sm:flex dark:bg-gray-700 dark:text-white">
        {labels.map((label) => {
          return (
            <li className="w-full">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox-list"
                  type="checkbox"
                  value={label}
                  name={label}
                  checked={checkedItems[label] ?? false}
                  className="w-4 h-4 bg-gray-100 rounded dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600"
                  onChange={onChange}
                />
                <label
                  htmlFor="vue-checkbox-list"
                  className="w-full py-4 ml-2 text-sm font-light text-gray-900 dark:text-gray-300"
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
