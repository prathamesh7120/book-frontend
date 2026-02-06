import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {   // ← Function name MUST be Navbar
  return (
    <nav className="navbar">
      <div className="logo">Bookvibe</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
       
      </ul>
    </nav>
  );
}

export default Navbar;   // ← VERY IMPORTANT
