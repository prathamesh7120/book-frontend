import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <h2>Categories</h2>

      <div className="cat-container">
        <Link to="/categories/technology" className="cat-btn">Technology</Link>
        <Link to="/categories/sports" className="cat-btn">Sports</Link>
        <Link to="/categories/travel" className="cat-btn">Travel</Link>
        <Link to="/categories/fashion" className="cat-btn">Fashion</Link>
      </div>
    </div>
  );
}

export default Categories;
