import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Userinfo: {
        name: "dummy name",
        login: "default",
        created_at: "nahi batunga"

      },
    };
    // console.log("child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/manjeetSinghMakaut");
    const json = await data.json();

    console.log(json);

    this.setState({
      Userinfo: json
    });
  }

 componentDidUpdate(){
  console.log("componentdidupdate");
  
 }
componentWillUnmount(){
  console.log("component will unmount");
  
}
  render() {
    const { name, login, created_at,avatar_url } = this.state.Userinfo;

    //  debugger

  //  console.log(" child render");

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>{name}</h2>
        <h3>{login}</h3>
        <h4> {created_at}</h4>
      </div>
    );
  }
}

export default UserClass;
