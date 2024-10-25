import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

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
        <h1>ABOUT CLASS </h1>
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
