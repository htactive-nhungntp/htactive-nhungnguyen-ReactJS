import React, { Component } from "react";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return " ";
}

class DemoConditional extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  };

  render() {
    return (
      <>
        <h1>Demo Conditional Rendering</h1>
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? "Hide" : "Show"}
          </button>
        </div>
      </>
    );
  }
}

export default DemoConditional;
