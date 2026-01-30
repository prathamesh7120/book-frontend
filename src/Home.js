import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to BookVibe</h1>
        <p>Find best Books here</p>
      </header>

      <section className="home-content">
        <div className="card">
          <h3>About Project</h3>
          <p>This project is built using React and GitHub collaboration.</p>
        </div>

        <div className="card">
          <h3>Features</h3>
          <p>Fast, responsive, and modern UI.</p>
        </div>

        <div className="card">
          <h3>Team</h3>
          <p>Collaborating and learning together.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
