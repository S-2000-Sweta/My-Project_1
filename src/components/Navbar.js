import React from "react";
import "./../styles/Navbar.css";
import logo from "../asserts/images/Way2win.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Brand Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="https://nirmalya.store/way2win" target="_blank" rel="noopener noreferrer">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
