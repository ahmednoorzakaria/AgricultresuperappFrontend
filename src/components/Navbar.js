import React from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="logo">
        Agricultural
        </Link>
            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/experts">Experts</Link>
            <Link to="/communities">Communities</Link>
            </div>
        <div className="user-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        </div>
   </nav>
  )
}

export default Navbar