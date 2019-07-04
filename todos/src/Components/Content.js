import React, { Component } from "react";
class Content extends Component {
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
                  autofocus
                />
              </div>
              <div className="form-group col-md-1">
                <button className="btn btn-success" onclick="">
                  Add
                </button>
              </div>
            </div>
            <div className="progress">
              <div
                className
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                id="progress"
              />
            </div>
            <div className="row input-area">
              <button type="button" onclick="" className="btn btn-success">
                Select all
              </button>
              <button type="button" onclick="" className="btn btn-info">
                Select active
              </button>
              <button type="button" onclick="" className="btn btn-danger">
                Select Complete
              </button>
            </div>
            <ul className="list-group" id="taskList" />
            <li className="list-group-item checkbox">
              <div className="row">
                <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                  <label>
                    <input id="toggleTaskStatus" type="checkbox" onchange="" />
                  </label>
                </div>
                <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text  ">
                  <input type="text" className="form-control" id="" />
                </div>
                <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                  <div className="icon">
                    <div className="row">
                      <a className="icon" href onclick="">
                        <i id="pen" className="fa fa-pencil" />
                      </a>
                      &nbsp;&nbsp;
                      <a className="icon" href onclick="">
                        <i className="fa fa-trash" />
                      </a>
                      &nbsp;&nbsp;
                      <a className="icon" href onclick="">
                        <i className="fa fa-check" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
