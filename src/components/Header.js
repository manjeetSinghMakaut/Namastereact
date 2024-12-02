import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    //  console.log("useeffect called");
  }, [btnNameReact]);
  
// subscribing to the store using our selector

 const cartItems = useSelector((store)=>store.cart.items);
 

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-between  border border-black items-center h-[100px] overflow-hidden font-serif">
        <div className="w-[150px] h-[110px] overflow-hidden">
          <img
            className="w-full h-full object-contain cursor-pointer"
            src={LOGO_URL}
          />
        </div>
        <div className="p-x-5 flex items-center">
          <ul className="flex px-3 m-4 gap-7">
            <li className=" hover:text-blue-700">
              <Link to={"/"}>Home</Link>
            </li>
            <li className=" hover:text-blue-700">
              <Link to="/about">About</Link>
            </li>
            <li className=" hover:text-blue-700">
              {" "}
              <Link to="/ContactUs">ContactUs</Link>
            </li>
            <li className=" hover:text-blue-700">
              {" "}
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className=" hover:text-blue-700 font-bold">
              {" "}
              <Link to="/cart">(Cart {cartItems.length} -Items)</Link>
            </li>
            <li>Online Status:{OnlineStatus ? "🟢" : "🔴"}</li>
            <button
              className="ml-2 h-[34px] w-[100px] rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
            <li className=" font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </header>


  );
};

export default Header;
