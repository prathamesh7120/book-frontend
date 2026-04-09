import React, { useContext } from "react";
import "./RomanceBooks.css";
import { CartContext } from "../context/CartContext";

import r1 from "../image/love_rain.jpg";
import r2 from "../image/love_story.jpg";
import r3 from "../image/forever_yours.jpg";

function RomanceBooks() {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Romance Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={r1} alt="Romance Book 1" className="book-img" />
          <h3 className="book-title">Love in the Rain</h3>
          <p className="book-price">₹249</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Love in the Rain",
                price: "₹249",
                image: r1,
                author: "Karan Mehta",
                date: "2021",
                description: "A beautiful romantic story set in the rain."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={r2} alt="Romance Book 2" className="book-img" />
          <h3 className="book-title">A Perfect Love Story</h3>
          <p className="book-price">₹299</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "A Perfect Love Story",
                price: "₹299",
                image: r2,
                author: "Sneha Kapoor",
                date: "2022",
                description: "A heart-touching perfect love journey."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={r3} alt="Romance Book 3" className="book-img" />
          <h3 className="book-title">Forever Yours</h3>
          <p className="book-price">₹279</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Forever Yours",
                price: "₹279",
                image: r3,
                author: "Rahul Verma",
                date: "2020",
                description: "A timeless story of love and commitment."
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

export default RomanceBooks;