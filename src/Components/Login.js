import React from "react";
import { Link } from "react-router-dom";
import "../Css/Auth.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-link">
          <Link to="/forgot">Forgot password?</Link>
        </p>

        <div className="or-line">
          <span>OR</span>
        </div>

        <button className="google-btn">
       <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
          alt="Google"
          className="google-icon"
/>
          Continue with Google
        </button>

        <p className="auth-link bottom">
          Don’t have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
