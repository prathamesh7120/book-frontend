import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

function Home() {
  return (
    <div className="landing">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">BookVibe</h2>
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register" className="nav-btn">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Discover, Read & Love <span>Books</span>
          </h1>
          <p>
            BookVibe is your one-stop platform to explore books, manage reading,
            and connect with book lovers.
          </p>

          <div className="hero-buttons">
            <Link to="/register">
              <button className="primary-btn">Create Free Account</button>
            </Link>
            <Link to="/login">
              <button className="secondary-btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-vector/reading-concept-illustration_114360-8201.jpg"
            alt="Books"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose BookVibe?</h2>

        <div className="feature-cards">
          <div className="card">
            <h3>📚 Huge Collection</h3>
            <p>Access books from multiple genres in one place.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast & Simple</h3>
            <p>Clean UI designed for speed and ease of use.</p>
          </div>

          <div className="card">
            <h3>🤝 Community</h3>
            <p>Collaborate and grow with fellow book lovers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 BookVibe. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
