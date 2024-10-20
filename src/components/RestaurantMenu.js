import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantSmallCard from "./RestaurantSmallCard.js";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); 



  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    
    const json = await data.json();
    setResInfo(json.data);
  };

  console.log(resInfo);
  

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
  } =resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card.card

  ;
  ;

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
