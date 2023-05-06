interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full text-white font-medium text-base leading-4">
      {text}
    </button>
  );
}
