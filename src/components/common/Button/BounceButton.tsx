import ChevronDoubleDownIcon from "../Icon/ChevronDoubleDownIcon";

export default function BounceButton() {
  return (
    <button className="animate-bounce p-4 bg-white rounded-full">
      <a href="#featuredProducts">
        <ChevronDoubleDownIcon />
      </a>
    </button>
  );
}
