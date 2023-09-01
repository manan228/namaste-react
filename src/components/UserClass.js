import axios from "axios";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "http:dummy-photo.com",
      },
    };

    console.log(`inside constructor`);
    // console.log(`${this.props.name} Child Constructor`);
  }

  async componentDidMount() {
    // console.log(`${this.props.name} Child ComponentDidMount`);
    try {
      const response = await axios.get("https://api.github.com/users/manan228");
      this.setState({
        userInfo: response.data,
      });
      console.log(`inside componentDidMount`);

      this.id = setInterval(() => {
        console.log(`setInterval called`);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate() {
    console.log(`inside componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`inside componentWillUnmount`);
    clearInterval(this.id);
  }

  render() {
    console.log(`inside render`);
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(name);
    // const { name, location } = this.props;
    // const { count } = this.state;

    // console.log(`${this.props.name} Child Render`);

    return (
      <div className="user-card">
        {/* <h1>Count = {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @manan228</h4>
      </div>
    );
  }
}

export default UserClass;
