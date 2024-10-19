import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantSmallCard from "./RestaurantSmallCard.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6452765&lng=88.46127489999999&restaurantId=705075&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
  {itemCards.map((item, index) => (
    <RestaurantSmallCard key={index} SmallCard={item} />
  ))}
</div>


    </div>
    
  );
};

export default RestaurantMenu;
