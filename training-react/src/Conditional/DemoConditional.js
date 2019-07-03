import React, { Component } from "react";

function WarningBanner(props) {
  if (!props.warn) {
    return <div className="warning" />;
  }
  return null;
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
      <div>
        <h1>Demo Conditional Rendering</h1>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}
export default DemoConditional;
