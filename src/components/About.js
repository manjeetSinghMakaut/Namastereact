import React from "react";
import UserClass from "./UserClass.js";
import UserContext from "../utils/UserContext.js";
// CLASS BASED OOMPONENT
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log(" parent constructor");
  }
  componentDidMount() {
    console.log("parent componenet did mount");
  }
  render() {
    console.log(" parent render");

    return (
      <div>
        <div>
          logged In User 
          <UserContext.Consumer>
            {({loggedInUser})=> <h1 className="font-bold">{ loggedInUser}</h1>
            }
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;






















//FUNCTIONAL COMPONENT

// const About = () => {
//   return (
//     <div>
//       <h1>ABOUT</h1>
//       <UserClass
//         name={"manjeet singh"}
//         location={"kolkata"}
//         contact={"123445345"}
//       />
//     </div>
//   );
// };
// export default About;
