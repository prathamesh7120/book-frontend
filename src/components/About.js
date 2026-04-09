import React from "react";
import "./About.css";
import { FaBook, FaUserGraduate, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">

        <h1 className="about-title">About BookVibe</h1>

        <p className="about-desc">
          BookVibe is a modern platform created to help users easily explore,
          discover, and access books across multiple categories including 
          <strong> Technology, Travel, Sports, and Fashion</strong>.  
          Our goal is to provide a smooth and user-friendly experience for all book lovers.
        </p>

        <div className="about-features">

          <div className="feature-box">
            <FaBook className="icon" />
            <h3>Wide Book Categories</h3>
            <p>Find books from technology to travel with ease.</p>
          </div>

          <div className="feature-box">
            <FaUserGraduate className="icon" />
            <h3>Easy Learning</h3>
            <p>Perfect for students and beginners to explore knowledge.</p>
          </div>

          <div className="feature-box">
            <FaLaptopCode className="icon" />
            <h3>Modern UI</h3>
            <p>Built with a clean and responsive design for better experience.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
