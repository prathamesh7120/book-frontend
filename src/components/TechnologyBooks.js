import React from "react";
import javascriptImg from "../image/javascript.jpg"; 
import reactImg from "../image/React.jpg";
import pythonImg from "../image/Python.jpg";
import "./TechnologyBooks.css";

function TechnologyBooks() {
  const books = [
    {
      id: 1,
      title: "JavaScript Essentials",
      price: "₹299",
      image: javascriptImg,
    },
    {
      id: 2,
      title: "React for Beginners",
      price: "₹399",
      image: reactImg,
    },
    {
      id: 3,
      title: "Python Programming Guide",
      price: "₹349",
      image: pythonImg,
    },
  ];

  return (
    <div className="tech-container">
      <h2 className="section-title">Technology Books</h2>

      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} className="book-img" />

            <h3 className="book-title">{book.title}</h3>
            <p className="book-price">{book.price}</p>

            <button className="cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyBooks;
