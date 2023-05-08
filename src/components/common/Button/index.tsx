import { memo } from "react";
import { TextProps } from "@/types";

function Button({ text }: TextProps) {
  return (
    <button
      className={`hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800  py-3 xl:py-4 px-8 md:px-16 md:w-auto w-full text-white font-medium text-sm lg:text-base leading-4`}
    >
      {text}
    </button>
  );
}

const MemorizedButton = memo(Button);

export { MemorizedButton as Button };
