import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const products = [
    {id:1, name:"Iphone 8",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 14000000},
    {id:2, name:"Iphone 7",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 17000000},
    {id:3, name:"Iphone 6",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 19000000},
    {id:4, name:"Iphone 5",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 13000000},
    {id:5, name:"Iphone 6 plus",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 18000000},
    {id:6, name:"Iphone 8 plus",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 10000000},
    {id:7, name:"Iphone 7 plus",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 11000000},
    {id:8, name:"Iphone 5 plus",image:"https://didongthongminh.vn/upload_images/2018/02/8red.png",price: 15000000}
  ]
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          Welcome to React Router
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to={{
                pathname: "/",
                state: { title: "React", object: "Router", point: 100 }
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={{
                pathname: "/about",
                state: { id: 1, name: "Nguyen Thi Phuong Nhung", age: 20 }
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={{
                pathname: "/product",
                state: products
              }}
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
