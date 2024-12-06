import { React, useContext, useEffect } from "react";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useBodyCards from "../utils/useBodyCards.js";
import { flattenObject } from "../utils/useFlatten.js";
import OfflineComponent from "./OfflineComponent.js";
import { CDN_LINK } from "../utils/constants.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";


// {this is an hoc which is taking the normal
// resturant card and make enhance it with new
// import { withpromoted } from "./RestaurantCard";

// lable the akshay has this promoted in api but i dont }

const Body = () => {
  // here we are passing the restaurant to the hoc to enhance it if it is true and the new component will get stored in this Resturantcardpromoted
  // const Resturantcardpromoted= withpromoted(ResturantCard)
  const BodyCards = useBodyCards();



  const {
    listOfResturants,
    filteredRestaurant,
    searchText,
    setFilteredRestaurant,
    setSearchText,
  } = BodyCards;

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) return <OfflineComponent />;

  const shimmerCount =
    filteredRestaurant.length > 0 ? filteredRestaurant.length : 8;

  // console.log(filteredRestaurant);

  const { loggedInUser, setUserName } = useContext(UserContext);


  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", loggedInUser);
    }
  }, [loggedInUser]);
  

  return filteredRestaurant.length === 0 ? (
    <Shimmer count={shimmerCount} />
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
                (res) => res.info.avgRatingString > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
        <div className="ml-3">
          <label>UserName : </label>
          <input
            className="h-[40px] p-2 border-2 border-black rounded-md focus:outline-none caret-black ml-3"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {filteredRestaurant.map((restaurant) => {
          const flattenedData = flattenObject(restaurant.info);
          const imageUrl = `${CDN_LINK}${flattenedData.cloudinaryImageId}`;
          return (
            <Link
              key={flattenedData.id}
              to={`/restaurants/${flattenedData.id}`}
            >
              {/* //this is showing that after checking that if promoted is true then render first else second */}
              {/* {flattenedData.data.promoted ? < Resturantcardpromoted  resdata={{ ...flattenedData, image: imageUrl }/> : <ResturantCard resdata={{ ...flattenedData, image: imageUrl }} } */}
              <ResturantCard resdata={{ ...flattenedData, image: imageUrl }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
