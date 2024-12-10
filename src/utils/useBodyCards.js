import React from "react";
import { useState, useEffect } from "react";
const useBodyCards = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchData();
  }, []);
    


  
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6452765&lng=88.46127489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const json = await response.json();

      // Optional chaining with fallback to empty array
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setlistOfResturants(restaurants);
      setFilteredRestaurant(restaurants);

    } catch (err) {
      console.error("Error fetching restaurant data:", err);
      setError(err.message); // Set error message for debugging or UI display
    }
  };
  return {
    listOfResturants,
    searchText,
    setSearchText,
    filteredRestaurant,
    setFilteredRestaurant,
    error
  };
};

export default useBodyCards;