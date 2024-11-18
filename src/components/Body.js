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
      <div className="flex items-center m-4">
        <div className="">
          <input
            type="text"
            className="h-[40px] p-2 border-2 border-black rounded-md focus:outline-none caret-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="h-[40px] px-4 border-2 border-black rounded-md ml-2 bg-green-500 text-black  hover:bg-green-600 border-none"
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
            className="h-[40px] px-4 border-2 border-black rounded-md bg-gray-300 text-black hover:bg-gray-400  border-none ml-5"
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

      <div className="flex flex-wrap justify-center gap-4 p-4">
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
