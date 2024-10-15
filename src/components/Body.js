import ResturantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  //  - super powerful variable

  const [listOfResturants, setlistOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log(searchText);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6452765&lng=88.46127489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // optional chaining
    setlistOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); 
  };

  // conditional rendering -this will be shown until our api not responded

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) :
 (
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
              const filteredResturant = listOfResturants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredResturant);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              //filter logic here
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRatingString > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
