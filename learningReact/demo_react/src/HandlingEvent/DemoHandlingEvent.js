import React, { Component } from "react";
class DemoHandlingEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <>
        <h1>Demo Handling Event</h1>
        <p>Let's save electric together!!</p>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </>
    );
  }
}
export default DemoHandlingEvent;
