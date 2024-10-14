import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {


  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("render header");
  

  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-Items">
        <ul>
          <li> Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {

              btnNameReact === "Login" ? setBtnNameReact("Logout") :  setBtnNameReact("Login");
              
            
            }}
          >{btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
