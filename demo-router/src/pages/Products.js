import React from "react";
import { Link } from "react-router-dom";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="container">
        <h1>List products</h1>
        <div className="row">
          {this.props.location.state.map(dt => (
            <div className="col-sm-3">
              <div className="card" style={{ width: "15rem" }}>
                <img className="card-img-top" src={dt.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{dt.name}</h5>
                  <p className="card-text">{dt.price}</p>
                  <Link
                    className="btn btn-danger"
                    to={{
                      pathname: "/detail",
                      state: {dt}
                    }}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Detail;
