import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { id, name, price, image } = this.props.location.state.dt;
    return (
      <div>
        <h3>PRODUCT DETAIL</h3>
        <p>Mã sản phẩm : {id}</p>
        <p>Tên sản phẩm: {name}</p>
        <p>Gía sản phẩm: {price}</p>
        <img src={image} alt="anh khong hien thi" />
      </div>
    );
  }
}

export default Detail;
