import React, { Component } from "react";
import "./style/content.css";
import Item from "./Item";
import ProgressBar from "./ProgressBar";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newtask: ""
    };
  }

  handleChange = event => {
    this.setState({ newtask: event.target.value });
  };

  addNewTask = () => {
    if (this.state.newtask === "") {
      alert("Data empty !!!");
    } else {
      this.props.addNewTask(this.state.newtask);
      this.setState({
        newtask: ""
      });
    }
  };

  render() {
    let items = this.props.items.map(item => (
      <Item
        key={item.id}
        item={item}
        addNewTask={this.props.addNewTask}
        toggleChange={this.props.toggleChange}
        deleteTask={this.props.deleteTask}
      />
    ));

    return (
      <div className="container">
        <div className="content-area row">
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
            <div className="row input-area">
              <div className="form-group col-md-9">
                <input
                  type="text"
                  placeholder="New Task"
                  className="form-control"
                  id="addTask"
                  value={this.state.newtask}
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-1">
                <button
                  id="btn-add"
                  className="btn btn-success"
                  onClick={() => this.addNewTask()}
                >
                  Add
                </button>
              </div>
            </div>
            <ProgressBar />
            <div className="row input-area">
              <button type="button" className="btn btn-success">
                Select all
              </button>
              <button type="button" className="btn btn-info">
                Select active
              </button>
              <button type="button" className="btn btn-danger">
                Select Complete
              </button>
            </div>
            <ul className="list-group" id="taskList">
              {items}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
