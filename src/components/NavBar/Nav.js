import React from "react";
import { Link } from "react-router-dom";
import logo from "./Cultural.png";
import "./Nav.css";

const Nav = ({ loggedInUser, handleLogout }) => {
  const loginText = loggedInUser ? "Logout" : "Login";

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Blogs</Link></li>
        <li><Link to="#">Communities</Link></li>
        {loggedInUser ? (
          <li>
            <Link to="/Login" onClick={handleLogout}>{loginText}</Link>
          </li>
        ) : (
          <li>
            <Link to="/Login">{loginText}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
