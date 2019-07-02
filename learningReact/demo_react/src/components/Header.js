import React from "react";

const Header = ({ data: { title, name } }) => (
  <div className="Header">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {/* Brand */}
      <a className="navbar-brand" href="#">
        {title}
      </a>
      {/* Links */}
      <ul className="navbar-nav">
        {name.map(item => (
          <li className="nav-item">
            <a className="nav-link" href="#">
              {item}
            </a>
          </li>
        ))}

        {/* Dropdown */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            Language
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Vietnam
            </a>
            <a className="dropdown-item" href="#">
              English
            </a>
            <a className="dropdown-item" href="#">
              Link 3
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
