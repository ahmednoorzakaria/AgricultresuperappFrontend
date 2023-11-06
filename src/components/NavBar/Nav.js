import React from "react";
import { Link } from "react-router-dom";
import logo from "./Cultural.png";
import "./Nav.css";

const Nav = ({ loggedInUser }) => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Blogs</Link></li>
        <li><Link to="#">Communities</Link></li>
        {loggedInUser ? (
          // Display the user's name and icon when logged in
          <li className="user-info">
            <img
              src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              alt=""
              className="user-icon"
            />
            <span>{loggedInUser}</span>
          </li>
        ) : (
          <li><Link to="/Login">Log-In</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
