import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InquiryForm = () => {
  const navigate = useNavigate(); // For redirection

  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiry({ ...inquiry, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/inquiry",
        inquiry
      );
      alert(res.data.message);

      // Clear form fields after submission
      setInquiry({
        name: "",
        email: "",
        phone: "",
        product: "",
      });

      // Redirect to Dashboard
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error submitting inquiry");
    }
  };

  return (
    <div>
      <h2>Submit Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={inquiry.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={inquiry.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={inquiry.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product:</label>
          <input
            type="text"
            name="product"
            value={inquiry.product}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default InquiryForm;
