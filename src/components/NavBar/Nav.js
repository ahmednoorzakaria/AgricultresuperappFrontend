import React from "react";
import { Link } from "react-router-dom";
import logo from "./Cultural.png";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><Link to="#">Home</Link></li>
        <li><Link to="#">Blogs</Link></li>
        <li><Link to="#">Communities</Link></li>
        <li><Link to="/Login">Log-In</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
