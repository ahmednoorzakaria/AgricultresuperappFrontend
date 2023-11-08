import "./NavBar.css";
import VideoBackground from "./VideoBackground";
import Nav from "./Nav";
import React, { useEffect, useState } from 'react';


function NavBar() {
  const [text, setText] = useState('');
  const fullText = "Connect, learn, grow: The agricultural hub for success.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval speed as needed
  }, []);
  const textStyle = {
    color: '#d2ee82'
  };


  return (
    <div className="banner">
      <VideoBackground />
      <div className="content">
      <h1 style={textStyle}>{text}</h1>
      </div>
    </div>
  );
}

export default NavBar;


