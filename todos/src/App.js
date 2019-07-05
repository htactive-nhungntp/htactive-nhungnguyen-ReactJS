import React, {Component} from "react";
import "./App.css";
import Header from "./Components/js/Header";
import Content from "./Components/js/Content";
import Item from "./Components/js/Item";


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      task: [],
      newtask: "",
    };
  }

  async componentDidMount() {
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
    console.log("Data here:", this.state.task);
  }

  addNewTask = async (item) => {
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

  toggleChange = item => {
    // const itemTask = this.state.task.find(x => x.id === id);
    item.iscompleted = !item.iscompleted;
    fetch(`https://5d1c825af31e7f00147eb7d6.mockapi.io/task/${item.id}`, 
    {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    let arr = this.state.task;
    this.setState({
      task: arr
    });
    // .catch(err =>err);
  };


  render(){
    const task = this.state.task;
    console.log(task);
    return (
      <>
        <Header />
        <Content items={task} addNewTask={this.addNewTask} toggleChange={this.toggleChange}/>
      </>
    );
  }
}

