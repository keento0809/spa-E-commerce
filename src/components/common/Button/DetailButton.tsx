import { TextProps } from "@/types";

export default function DetailButton({ text }: TextProps) {
  return (
    <button className="block bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white text-center">
      {text}
    </button>
  );
}
