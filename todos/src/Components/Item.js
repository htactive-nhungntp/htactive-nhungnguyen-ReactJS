import React, { Component } from "react";
import "./style/item.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      task_update: ""
    };
  }
  handleChange = event => {
    this.setState({ task_update: event.target.value });
    this.props.item.taskname = event.target.value;
  };

  onClickCheck = () => {
    this.props.toggleChange({
      ...this.props.item,
      taskname: this.state.task_update
    });
    this.setState({
      display: !this.state.display
    });
  };

  onClickPencil = () => {
    this.setState({
      display: !this.state.display
    });
  };

  deleteTask = id => {
    this.props.deleteTask(id);
  };

  toggleChange = () => {
    this.props.toggleChange({
      ...this.props.item,
      iscompleted: !this.props.item.iscompleted
    });
  };

  render() {
    const { id, taskname, iscompleted } = this.props.item;
    const { display } = this.state;
    return (
      <li className="list-group-item checkbox" key={id}>
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                id="toggleTaskStatus"
                type="checkbox"
                defaultChecked={iscompleted}
                onClick={() => this.toggleChange()}
              />
            </label>
          </div>
          <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text">
            <input
              id={iscompleted ? "completed" : " "}
              type="text"
              value={taskname}
              className={this.state.display ? "disabledInput" : "enableInput"}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <div className="icon">
              <div className="row">
                {!display && (
                  <i
                    id="pen"
                    className="fa fa-pencil"
                    onClick={this.onClickPencil}
                  />
                )}
                &nbsp;&nbsp;
                <i
                  className="fa fa-trash"
                  onClick={() => this.deleteTask(id)}
                />
                &nbsp;&nbsp;
                {display && (
                  <i className="fa fa-check" onClick={this.onClickCheck} />
                )}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
