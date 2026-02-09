import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Auth.css";

function VerifyOtp() {
  const navigate = useNavigate();
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    if (e.target.value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Verify OTP</h2>
        <p className="auth-subtitle">
          Enter the 4-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                maxLength="1"
                required
                ref={(el) => (inputs.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
              />
            ))}
          </div>

          <button type="submit" className="auth-btn">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;
