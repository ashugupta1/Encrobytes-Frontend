import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [counts, setCounts] = useState({ products: 0, categories: 0 });

  useEffect(() => {
    // Fetch counts for products and categories from the backend
    const fetchCounts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/dashboard/counts");
        setCounts(res.data);
      } catch (err) {
        console.error("Error fetching counts", err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-card">
        <h3>Total Products</h3>
        <p>{counts.products}</p>
      </div>
      <div className="dashboard-card">
        <h3>Total Categories</h3>
        <p>{counts.categories}</p>
      </div>
    </div>
  );
};

export default Dashboard;
