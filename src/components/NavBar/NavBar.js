import React from "react";
import "./NavBar.css";
import VideoBackground from "./VideoBackground";

const Navbar = () => {
  return (
    <div className="banner">
      <VideoBackground />
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
