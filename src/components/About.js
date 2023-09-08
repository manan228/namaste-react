import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(`Parent Constructor`);
  }

  componentDidMount() {
    // console.log(`Parent ComponentDidMount`);
  }

  render() {
    // console.log(`Parent Render`);
    return (
      <div>
        <h1>About</h1>
        <div>
          Logged in User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Manan Shah (function)"} /> */}
        <UserClass name={"First"} location={"USA"} />
        {/* <UserClass name={"Second"} location={"India"} />
        <UserClass name={"Third"} location={"India"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"Manan Shah (function)"} /> */}
//       <UserClass name={"Manan Shah (class)"} location={"USA"} />
//     </div>
//   );
// };

export default About;
