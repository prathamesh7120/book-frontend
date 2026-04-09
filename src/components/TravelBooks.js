import React, { useContext } from "react";
import "./TravelBooks.css";
import { CartContext } from "../context/CartContext";

import tr from "../image/explore_india.jpg";
import travel4 from "../image/world_adventures.jpg";
import travel5 from "../image/backpacking_tips.jpg";

function TravelBooks() {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Travel Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={tr} alt="Travel Book 1" className="book-img" />
          <h3 className="book-title">Explore India</h3>
          <p className="book-price">₹350</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Explore India",
                price: "₹350",
                image: tr,
                author: "Ramesh Gupta",
                date: "2021",
                description: "Discover the beauty and culture of India."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={travel4} alt="Travel Book 2" className="book-img" />
          <h3 className="book-title">World Adventures</h3>
          <p className="book-price">₹420</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "World Adventures",
                price: "₹420",
                image: travel4,
                author: "Emily Clark",
                date: "2020",
                description: "Exciting travel stories from around the world."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={travel5} alt="Travel Book 3" className="book-img" />
          <h3 className="book-title">Backpacking Tips</h3>
          <p className="book-price">₹300</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Backpacking Tips",
                price: "₹300",
                image: travel5,
                author: "Arjun Mehta",
                date: "2019",
                description: "Essential tips for budget backpack travelers."
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

export default TravelBooks;