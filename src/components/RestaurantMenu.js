import Shimmer from "./Shimmer";
import RestaurantSmallCard from "./RestaurantSmallCard.js";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu.js";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);// PICKING UP THE DATA THEN USING BY DESTRUCTURING....

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        {avgRatingString} - {costForTwoMessage}
      </div>
      <div>
        {slaString} - {areaName}
      </div>
      <div className="white-box-line"></div>
      <div className="SmallCards-container">
        {itemCards.map((item) => (
          <RestaurantSmallCard key={item.card.info.id} SmallCard={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
