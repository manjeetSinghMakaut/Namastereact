import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId); // PICKING UP THE DATA THEN USING BY DESTRUCTURING....

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col items-center justify-center text-center py-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      </div>
      <div className="text-lg text-gray-600">
        {avgRatingString} - {costForTwoMessage}
      </div>
      <div className="text-sm text-gray-500">
        {slaString} - {areaName}
      </div>

      {/* categories accordians */}
      {categories.map((category) => (
        <RestaurantCategory key={category.card.card.title} data={category.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
