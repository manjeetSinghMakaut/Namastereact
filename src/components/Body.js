import ResturantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  //  - super powerful variable

  const [listOfResturants, setlistOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant,setFilteredRestaurant] =useState([]);

  console.log(searchText);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.6452765&lng=88.46127489999999"
    );

    const json = await data.json();

    console.log(json);

    // optional chaining
    setlistOfResturants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);


  };

  // conditional rendering -this will be shown until our api not responded

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchbutton"
            onClick={() => {
              //filter the resturant cards and update the ui
              // searchtextconsole.log(searchText)
             const filteredResturant= listOfResturants.filter((res) =>{
              return  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
             setFilteredRestaurant(filteredResturant)  
            }}
          > 
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              //filter logic here
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRatingString > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => (
          <ResturantCard key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
