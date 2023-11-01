import React from "react";
import logo from "./Cultural.png";

const Nav = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Communities</a></li>
        <li><a href="#">Log-In</a></li>
      </ul>
    </div>
  );
};

export default Nav;
