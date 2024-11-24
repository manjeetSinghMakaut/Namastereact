import { data } from "autoprefixer";
import React from "react";
import Itemlist from "./Itemlist";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  const [showItems, setshowItems] = useState(false);

  console.log(data);
  

  const handleClick = () => {
    setshowItems(!showItems)
  };

  return (
    <div>
      {/*header*/}
      <div className="w-[750px] mx-auto bg-gray-50 shadow-lg p-4 my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{"⬇"}</span>
        </div>

        {showItems && <Itemlist items={data.itemCards} />}
      </div>
      {/*  accordian section */}
    </div>
  );
};

export default RestaurantCategory;
