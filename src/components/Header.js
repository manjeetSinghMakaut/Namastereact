import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {


  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("render header");
  

  useEffect(()=>{
   console.log("useeffect called");  
   
  },[btnNameReact])

  return (
    <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="Nav-Items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/About"}>About</Link></li>
          <li> <Link to={"/ContactUs"}>ContactUs</Link></li>
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
