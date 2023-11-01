import React from "react";
import logo from "./Cultural.png";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">BLOGS</a></li>
        <li><a href="#">Communities</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
  );
};

export default Nav;
