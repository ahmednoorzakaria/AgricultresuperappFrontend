import React from "react";
import logo from "./Cultural.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">BLOGS</a></li>
        <li><a href="#">Communities</a></li>
        <li><Link to="/login">Login</Link></li> {/* Link to the "Login" component */}

      </ul>
    </div>
  );
};

export default Nav;
