import React, { useContext } from "react";
import "./FashionBooks.css";
import { CartContext } from "../context/CartContext";

import fr from "../image/morden_fashion.jpg";
import fashion1 from "../image/style_trend.jpg";
import fashion2 from "../image/fashion_design.jpg";

function FashionBooks() {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Fashion Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={fr} alt="Fashion Book 1" className="book-img" />
          <h3 className="book-title">Modern Fashion Guide</h3>
          <p className="book-price">₹340</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Modern Fashion Guide",
                price: "₹340",
                image: fr,
                author: "Neha Kapoor",
                date: "2022",
                description: "Complete guide to modern fashion styles."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={fashion1} alt="Fashion Book 2" className="book-img" />
          <h3 className="book-title">Style and Trends</h3>
          <p className="book-price">₹399</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Style and Trends",
                price: "₹399",
                image: fashion1,
                author: "Priya Sharma",
                date: "2021",
                description: "Latest fashion trends and styling tips."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={fashion2} alt="Fashion Book 3" className="book-img" />
          <h3 className="book-title">Fashion Design</h3>
          <p className="book-price">₹450</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Fashion Design",
                price: "₹450",
                image: fashion2,
                author: "Rohit Verma",
                date: "2020",
                description: "Learn the basics of fashion designing."
              })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default FashionBooks;