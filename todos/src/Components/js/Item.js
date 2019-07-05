import React, { Component } from "react";
import "../css/item.css";

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

  toggleChange = () => {
    this.props.toggleChange({
      ...this.props.item,
      iscompleted: !this.props.iscompleted
    });
  };

  //   onClickTrash = () =>{
  //     return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
  //         method: 'DELETE',
  //         mode: 'CORS'
  //     }).then(res => {
  //         return res;
  //     }).catch(err => err);
  //   }

  render() {
    console.log("Item: ", this.props.item);
    const  { id, taskname, iscompleted } = this.props.item;
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
                onClick={() => this.toggleChange({ id, taskname, iscompleted })}
              />
            </label>
          </div>
          <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text  ">
            <input
              id={iscompleted ? "completed" : " "}
              type="text"
              className={this.state.display ? "disabledInput" : "enableInput"}
              defaultValue={taskname}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <div className="icon">
              <div className="row">
                <a className="icon" onClick={this.onClickPencil}>
                  {!display && <i id="pen" className="fa fa-pencil" />}
                </a>
                &nbsp;&nbsp;
                <a className="icon">
                  <i className="fa fa-trash" />
                </a>
                &nbsp;&nbsp;
                <a className="icon" onClick={this.onClickCheck}>
                  {display && <i className="fa fa-check" />}
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
