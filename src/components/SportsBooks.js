import React from "react";
import "./SportsBooks.css";

import cr from "../image/cricket_basics.jpg"
import travel2 from "../image/footbal_skills.jpg";
import travel3 from "../image/athlete_training.jpg";

function SportsBooks() {
  return (
    <div className="container">
      <h2 className="section-title">Sports Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={cr} alt="Sports Book 1" className="book-img" />
          <h3 className="book-title">Cricket Basics</h3>
          <p className="book-price">₹320</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

        <div className="book-card">
          <img src={travel2} alt="Sports Book 2" className="book-img" />
          <h3 className="book-title">Football Skills</h3>
          <p className="book-price">₹450</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

        <div className="book-card">
          <img src={travel3} alt="Sports Book 3" className="book-img" />
          <h3 className="book-title">Athlete Training</h3>
          <p className="book-price">₹380</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

      </div>
    </div>
  );
}

export default SportsBooks;
