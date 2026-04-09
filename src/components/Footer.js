import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">BookVibe</h2>

       
        <div className="footer-icons">
          <a href="#" className="icon"><FaFacebookF /></a>
          <a href="#" className="icon"><FaInstagram /></a>
          <a href="#" className="icon"><FaTwitter /></a>
          <a href="#" className="icon"><FaGithub /></a>
        </div>

        <p className="footer-copy">
          © 2026 BookVibe. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
