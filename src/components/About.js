import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <UserClass
        name={"manjeet singh"}
        location={"kolkata"}
        contact={"123445345"}
      />
    </div>
  );
};
export default About;
