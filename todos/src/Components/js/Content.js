import React, { Component } from "react";
import "../css/content.css";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: [],
      newtask: ""
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

  addNewTask = async () => {
    let newtask = { taskname: this.state.newtask, iscompleted: false };
    let arr = this.state.task;
    arr.push(newtask);
    this.setState({
      task: arr
    });
    await fetch("https://5d1c825af31e7f00147eb7d6.mockapi.io/task", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(newtask),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => console.log(res))
      .catch(err => err);
  };

  handleChange = event => {
    this.setState({ newtask: event.target.value });
  };
  toggleChange = () => {
    this.setState({
      iscompleted: !this.state.task.iscompleted
    });
  };
  render() {
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
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-1">
                <button
                  className="btn btn-success"
                  onClick={() => this.addNewTask()}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="progress">
              <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                id="progress"
              />
            </div>
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
              {this.state.task.map((item, i) => (
                <li className="list-group-item checkbox" key={i}>
                  <div className="row">
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                      <label>
                        <input
                          id="toggleTaskStatus"
                          type="checkbox"
                          status={item.iscompleted ? "defaultChecked" : ""}
                          onClick={() => item.id}
                        />
                      </label>
                    </div>
                    <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text  ">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        value={item.taskname}
                        readOnly
                      />
                    </div>
                    <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                      <div className="icon">
                        <div className="row">
                          <a className="icon">
                            <i id="pen" className="fa fa-pencil" />
                          </a>
                          &nbsp;&nbsp;
                          <a className="icon">
                            <i className="fa fa-trash" />
                          </a>
                          &nbsp;&nbsp;
                          <a className="icon">
                            <i className="fa fa-check" hidden />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
