import React from "react";
import { Link } from "react-router-dom";
import "../Css/Auth.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join BookVibe today</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <div className="or-line">
          <span>OR</span>
        </div>

        <button className="google-btn">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="auth-link bottom">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
