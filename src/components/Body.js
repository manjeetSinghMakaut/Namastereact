import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useBodyCards from "../utils/useBodyCards.js";
import OfflineComponent from "./OfflineComponent.js";
const Body = () => {
  //  - super powerful variable

  const BodyCards = useBodyCards();

  const {
    listOfResturants,
    filteredRestaurant,
    searchText,
    setFilteredRestaurant,
    setSearchText,
  } = BodyCards;

  console.log(filteredRestaurant);
  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return <OfflineComponent/>

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
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResturantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
