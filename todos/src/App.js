import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };
  }

  getData = async () => {
    await fetch("https://5d1c825af31e7f00147eb7d6.mockapi.io/task", {
      method: "GET",
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          task: data
        });
      })
      .catch(err => err);
    console.log(this.state.task);
  };

  componentDidMount() {
    this.getData();
  }

  addNewTask = async item => {
    let newtask = { taskname: item, iscompleted: false };

    await fetch("https://5d1c825af31e7f00147eb7d6.mockapi.io/task", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(newtask),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        let arr = [...this.state.task, data];
        this.setState({
          task: arr
        });
      })
      .catch(err => err);
  };

  toggleChange = async item => {
    await fetch(`https://5d1c825af31e7f00147eb7d6.mockapi.io/task/${item.id}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.status === 200) this.getData();
    });
  };

  deleteTask = id => {
    fetch(`https://5d1c825af31e7f00147eb7d6.mockapi.io/task/${id}`, {
      method: "delete",
      mode: "cors"
    }).then(res => {
      if (res.status === 200) this.getData();
    });
  };

  render() {
    const task = this.state.task;
    return (
      <>
        <Header />
        <Content
          items={task}
          addNewTask={this.addNewTask}
          toggleChange={this.toggleChange}
          deleteTask={this.deleteTask}
        />
      </>
    );
  }
}
