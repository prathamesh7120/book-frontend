import React, { useContext } from "react";
import "./HorrorBooks.css";
import { CartContext } from "../context/CartContext";

import h1 from "../image/haubted_nights.jpg";
import h2 from "../image/ghost_dark.jpg";
import h3 from "../image/house_shadow.jpg";

function HorrorBooks() {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Horror Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={h1} alt="Horror Book 1" className="book-img" />
          <h3 className="book-title">The Haunted Night</h3>
          <p className="book-price">₹349</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "The Haunted Night",
                price: "₹349",
                image: h1,
                author: "Arjun Rao",
                date: "2021",
                description: "A chilling haunted story full of suspense."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={h2} alt="Horror Book 2" className="book-img" />
          <h3 className="book-title">Ghosts of the Dark</h3>
          <p className="book-price">₹299</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Ghosts of the Dark",
                price: "₹299",
                image: h2,
                author: "Neha Sharma",
                date: "2020",
                description: "Dark and mysterious ghost stories."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={h3} alt="Horror Book 3" className="book-img" />
          <h3 className="book-title">House of Shadows</h3>
          <p className="book-price">₹329</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "House of Shadows",
                price: "₹329",
                image: h3,
                author: "Ravi Kumar",
                date: "2022",
                description: "A terrifying story of a haunted house."
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

export default HorrorBooks;