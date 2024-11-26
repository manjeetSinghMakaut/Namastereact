import { data } from "autoprefixer";
import React from "react";
import Itemlist from "./Itemlist";
const RestaurantCategory = ({ data, showItems, setshowIndex,dummy}) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div>
      {/*header*/}
      <div className="w-[750px] mx-auto bg-gray-50 shadow-lg p-4 my-4 cursor-pointer ">
        <div className="flex justify-between " onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{"⬇"}</span>
        </div>

        {showItems && <Itemlist items={data.itemCards} dummy={dummy} />}
      </div>
      {/*  accordian section */}
    </div>
  );
};

export default RestaurantCategory;
