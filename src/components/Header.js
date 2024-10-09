import { LOGO_URL } from "../utils/constants";


 const Header = () => {
    return (
      <div className="header">
        <div className="logo-conatiner">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="Nav-Items">
          <ul>
            <li> Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

  