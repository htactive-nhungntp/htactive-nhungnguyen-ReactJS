import React, { Component } from "react";

class DemoClock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; // Declare state in the constructor
  }

  componentDidMount() {
    // console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    // console.log("render");
    return (
      <div>
        <h1>Demo State and Lifecycle</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default DemoClock;
