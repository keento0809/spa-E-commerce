import { CheckBoxState } from "@/features/Home/HomePage";

interface Props {
  labels: string[];
  checkedItems: CheckBoxState;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SelectCheckBoxGroup({
  labels,
  checkedItems,
  onChange,
}: Props) {
  return (
    <div>
      <h3 className="mb-4 font-semibold">Categories</h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {labels.map((label) => {
          return (
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox-list"
                  type="checkbox"
                  value={label}
                  name={label}
                  checked={checkedItems[label] ?? false}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={onChange}
                />
                <label
                  htmlFor="vue-checkbox-list"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
