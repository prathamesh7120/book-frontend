import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Auth.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate("/verify-otp");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <p className="auth-subtitle">
          Enter your registered email to receive a reset code
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            required
          />

          <button type="submit" className="auth-btn">
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
