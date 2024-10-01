import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminPanel.css"; // Create this CSS file for styling

const AdminPanel = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/");
  };

  return (
    <div className="admin-panel">
      <nav className="sidebar">
        <h2 style={{ color: "white" }}>Admin Panel</h2>
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/categories">Categories</Link>
          </li>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          <li>
            <Link to="/admin/inquiries">Inquiries</Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>
      <div className="content">
        <Outlet /> {/* This will render the child routes */}
      </div>
    </div>
  );
};

export default AdminPanel;
