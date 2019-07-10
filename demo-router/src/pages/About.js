import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { id = 1, name = "", age = 0 } = this.props.location.state || {};
    return (
      <div>
        About me!!!
        <p>My id is:{id}</p>
        <p>My name is:{name}</p>
        <p>My point is:{age}</p>
      </div>
    );
  }
}

export default About;
