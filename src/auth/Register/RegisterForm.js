import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        alert("Registration successful");
        // Redirect to login after successful registration
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
  <div className="container">
    <div className="register-header">
      <h2>Register</h2>
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
      <button type="submit">Register</button>
    </div>

    <div className="login-link">
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  </div>
</form>
  );
};

export default RegisterForm;
