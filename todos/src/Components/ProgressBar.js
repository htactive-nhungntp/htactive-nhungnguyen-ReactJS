import React, { Component } from "react";
export default class ProgressBar extends Component {

  render() {
    return (
      <div className="progress">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          id="progress"
        />
      </div>
    );
  }
}
