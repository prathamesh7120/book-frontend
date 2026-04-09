import React, { useContext } from "react";
import "./KidsBooks.css";
import { CartContext } from "../context/CartContext";

import k1 from "../image/fun_kids.jpg";
import k2 from "../image/bedtime_storys.jpg";
import k3 from "../image/king_storys.jpg";

function KidsBooks() {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Kids Books</h2>

      <div className="book-list">

        <div className="book-card">
          <img src={k1} alt="Kids Book 1" className="book-img" />
          <h3 className="book-title">Fun Learning for Kids</h3>
          <p className="book-price">₹199</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Fun Learning for Kids",
                price: "₹199",
                image: k1,
                author: "Anita Verma",
                date: "2022",
                description: "Interactive learning book for kids."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={k2} alt="Kids Book 2" className="book-img" />
          <h3 className="book-title">Bedtime Stories</h3>
          <p className="book-price">₹159</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "Bedtime Stories",
                price: "₹159",
                image: k2,
                author: "Ravi Kumar",
                date: "2021",
                description: "Collection of short bedtime stories."
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <img src={k3} alt="Kids Book 3" className="book-img" />
          <h3 className="book-title">King Storys Book</h3>
          <p className="book-price">₹129</p>

          <button
            className="cart-btn"
            onClick={() =>
              addToCart({
                title: "King Storys Book",
                price: "₹129",
                image: k3,
                author: "Suresh Naik",
                date: "2020",
                description: "Classic king stories for kids."
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

export default KidsBooks;