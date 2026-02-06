import React from "react";
import "./TravelBooks.css";

import tr from "../image/explore_india.jpg"
import travel4 from "../image/world_adventures.jpg";
import travel5 from "../image/backpacking_tips.jpg";

function TravelBooks() {
  return (
    <div className="container">
      <h2 className="section-title">Travel Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={tr} alt="Travel Book 1" className="book-img" />
          <h3 className="book-title">Explore India</h3>
          <p className="book-price">₹350</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

        <div className="book-card">
          <img src={travel4} alt="Travel Book 2" className="book-img" />
          <h3 className="book-title">World Adventures</h3>
          <p className="book-price">₹420</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

        <div className="book-card">
          <img src={travel5} alt="Travel Book 3" className="book-img" />
          <h3 className="book-title">Backpacking Tips</h3>
          <p className="book-price">₹300</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

      </div>
    </div>
  );
}

export default TravelBooks;
