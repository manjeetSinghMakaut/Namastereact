import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
     
    };
  }

  render() {
    const { name, location, contact } = this.props;
    const {count} =this.state
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button  onClick={()=>{
            // never update state variable directly

           this.setState(
            {
                count: this.state.count+1
            }
           )

        }}>count increment</button>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4> {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
