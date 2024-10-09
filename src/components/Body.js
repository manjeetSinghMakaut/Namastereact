import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable - super powerful variable

  const [listOfResturants, setlistOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filteredList = listOfResturants.filter(
              (res) => res.AvgRating > 4.1
            );
            setlistOfResturants(filteredList);
          }}
        >  
          Top Rated Resturant
        </button>
      </div>

      <div className="res-container">
        {listOfResturants.map((restaurant,index) => (
          <ResturantCard key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
