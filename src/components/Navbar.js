import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";


<li>
<Link to="/cart">View Cart 🛒</Link>
</li>
function Navbar() {
  return (
    <nav className="navbar">

      {/* Center Logo */}
      <div className="logo">BookVibe</div>

      {/* Right Navigation */}
      <ul className="nav-links">

        {/* About */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>

        {/* Categories */}
        <li><Link to="/categories">Categories</Link></li>

        {/* Home Icon ONLY */}
        <li>
          <Link to="/" className="home-icon">
            <AiFillHome size={28} />
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
