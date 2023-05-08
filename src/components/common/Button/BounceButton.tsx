import ChevronDoubleDownIcon from "../Icon/ChevronDoubleDownIcon";

export default function BounceButton() {
  return (
    <a href="#featuredProducts">
      <button className="animate-bounce p-4 bg-white rounded-full">
        <ChevronDoubleDownIcon />
      </button>
    </a>
  );
}
