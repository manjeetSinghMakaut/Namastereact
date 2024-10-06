import React from "react";
import ReactDom from "react-dom/client";

// React Element => object => HTMLelement(render)

// creating using pure/core react

// const heading = React.createElement("h1" , {id: "heading"}, "hello everyone");
//  console.log(heading)

// jsx is not html in js

//creating using jsx

// jsx => React.createElement => ReactElement - js(object)=> HTMLElement(render)
// const heading = <h1 className="heading">namaste manjeet using jsx</h1>;

// react component 2 types :-

// 1.  class based components - old way
// 2. functional based componenets - new way

//functional based componenets:

// const HeadingComponent = () =>(
//     <h1 className="heading">namaste react functional component</h1>

// );

// const data = api.getData();

const Title = () => (
  <h1 className="head" tabIndex="5">
    namaste React using jsx
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">namaste react functional component</h1> ;
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
