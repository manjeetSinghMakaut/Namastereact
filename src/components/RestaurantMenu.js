import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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

    console.log(json);
    setResInfo(json.data);
  };

  const {
    name,
    avgRatingString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
  } = resInfo?.cards?.[2]?.card?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
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

      <h2>Menu</h2>
      <ul>
        <li>biryani</li>
        <li>burger</li>
        <li>diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
