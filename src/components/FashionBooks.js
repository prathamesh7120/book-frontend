import React from "react";
import "./FashionBooks.css";

import fr from "../image/morden_fashion.jpg"
import fashion1 from "../image/style_trend.jpg";
import fashion2 from "../image/fashion_design.jpg";


function FashionBooks() {
  return (
    <div className="container">
      <h2 className="section-title">Fashion Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={fr} alt="Fashion Book 1" className="book-img" />
          <h3 className="book-title">Modern Fashion Guide</h3>
          <p className="book-price">₹340</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

        <div className="book-card">
          <img src={fashion1} alt="Fashion Book 2" className="book-img" />
          <h3 className="book-title">Style and Trends</h3>
          <p className="book-price">₹399</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

        <div className="book-card">
          <img src={fashion2} alt="Fashion Book 3" className="book-img" />
          <h3 className="book-title">Fashion Design </h3>
          <p className="book-price">₹450</p>
          <button className="cart-btn">Add to Cart</button>
        </div>

      </div>
    </div>
  );
}

export default FashionBooks;
