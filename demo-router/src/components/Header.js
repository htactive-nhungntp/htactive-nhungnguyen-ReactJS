import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </nav>
    </>
  );
};

export default Header;
