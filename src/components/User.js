import React from "react";
import { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
     const [count,setCount]=useState(0)
     const [count2,setCount2]=useState(1)
  return (
    <div className="user-card">
      <h1>count={count}</h1>
      <h1>count2={count2}</h1>
      <h2> {name}</h2>
      <h3>{location}</h3>
      <h4>{contact}</h4>
    </div>
  );
};

export default User;
