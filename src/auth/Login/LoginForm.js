import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        // Store the JWT token in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to the admin panel (Dashboard)
        navigate("/admin");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="container">
      <div className="login">
        <h2>Login</h2>
      </div>
      <div className="input">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      </div>
      <div className="input">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      </div>
      <div className="button">
      <button type="submit">Login</button>
      </div>
      <div className="register">
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
        </div>
        </div>
    </form>
  );
};

export default LoginForm;
