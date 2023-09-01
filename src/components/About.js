import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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
