import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Handle sign-up submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post("/api/sign-up", { email, password });
      setMessage(response.data.message || "Sign-up successful!");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred during sign-up.");
    }
  };

  // Handle sign-in submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post("/api/sign-in", { email, password });
      if (response.data.success) {
        setMessage("Sign-in successful!");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred during sign-in.");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign Up / Sign In</h2>
      <form className="sign-up-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <div className="button-group">
          <button onClick={handleSignUp} className="btn-sign-up">
            Sign Up
          </button>
          <button onClick={handleSignIn} className="btn-sign-up">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
