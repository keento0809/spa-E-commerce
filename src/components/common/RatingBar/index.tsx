import ContainedStarIcon from "../Icon/ContainedStarIcon";
import OutlinedStarIcon from "../Icon/OutlinedStarIcon";

interface Props {
  rating: number;
}

export default function RatingBar({ rating }: Props) {
  return (
    <div className="flex items-center">
      {Array.from(Array(Math.floor(rating)).keys()).map(() => {
        return <ContainedStarIcon />;
      })}
      {Array.from(Array(5 - Math.floor(rating)).keys()).map(() => {
        return <OutlinedStarIcon />;
      })}
      <p className="ml-2 text-xs lg:text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating} out of 5
      </p>
    </div>
  );
}
