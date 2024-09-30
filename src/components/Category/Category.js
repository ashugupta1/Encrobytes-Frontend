import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Category/Category.css";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serialNumber: "",
    name: "",
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      alert("Error fetching categories");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      await axios.post("http://localhost:8080/api/category", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Category added successfully!");

      // Reset form and reload categories
      setFormData({ name: "", image: null });
      fetchCategories();
    } catch (error) {
      console.error("Error submitting category:", error);
      alert("Error submitting category.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/category/${id}`
      );
      alert(res.data.message);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Error deleting category");
    }
  };

  const handleEdit = (category) => {
    setFormData({
      serialNumber: category.serialNumber,
      name: category.name,
      image: null,
    });
    setEditMode(true);
    setEditCategoryId(category._id);
    setShowForm(true);
  };

  return (
    <div>
      <h2>Category Page</h2>
      <button onClick={() => setShowForm(!showForm)}>Add Category</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label>Serial Number:</label>
            <input
              type="number"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              required
            />
          </div> */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <button type="submit">{editMode ? "Update" : "Submit"}</button>
        </form>
      )}

      {/* Display categories in a table format */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.serialNumber}</td>
              <td>{category.name}</td>
              <td>
                {category.imageUrl ? (
                  <img
                    src={`http://localhost:8080${category.imageUrl}`}
                    alt={category.name}
                    width="50"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(category)}>Edit</button>
                <button onClick={() => handleDelete(category._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPage;
