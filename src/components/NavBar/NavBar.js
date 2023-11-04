import React from "react";
import "./NavBar.css";
import VideoBackground from "./VideoBackground";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="banner">
      <VideoBackground />
      <Nav />
      <div className="content">
        <h1>EXPLORE THE WORLD</h1>
        <div>
          <button type="button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



