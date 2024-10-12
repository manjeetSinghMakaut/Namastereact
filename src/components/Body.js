import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  //  - super powerful variable

  const [listOfResturants, setlistOfResturants] = useState([]);


  console.log(listOfResturants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.6452765&lng=88.46127489999999"
    );

    const json = await data.json();

    console.log(json);

    

    setlistOfResturants(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);

  
    
  };

  return (
    
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRatingString > 4.6
            );
            setlistOfResturants(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>

      <div className="res-container">
        {listOfResturants.map((restaurant, index) => (
          <ResturantCard key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
