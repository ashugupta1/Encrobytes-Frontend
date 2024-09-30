import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    serialNumber: "",
    name: "",
    category: "",
    image: null,
  });
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [categories, setCategories] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get(
          "http://localhost:8080/api/product"
        );
        setProducts(productResponse.data);

        const categoryResponse = await axios.get(
          "http://localhost:8080/api/category"
        );
        setCategories(categoryResponse.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission (Add or Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("serialNumber", formData.serialNumber);
    form.append("name", formData.name);
    form.append("category", formData.category);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      if (editMode) {
        // If edit mode is on, update the existing product
        await axios.put(
          `http://localhost:8080/api/product/${editProductId}`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        alert("Product updated successfully");
        setEditMode(false);
        setEditProductId(null);
      } else {
        // Otherwise, add a new product
        await axios.post("http://localhost:8080/api/product", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product added successfully");
      }

      setShowForm(false);
      setFormData({ serialNumber: "", name: "", category: "", image: null });

      // Refresh products
      const updatedProducts = await axios.get(
        "http://localhost:8080/api/product"
      );
      setProducts(updatedProducts.data);
    } catch (err) {
      console.error(err);
      alert("Error adding/updating product");
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/product/${id}`);
      alert("Product deleted successfully");
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  // Handle product editing
  const handleEdit = (product) => {
    setFormData({
      serialNumber: product.serialNumber,
      name: product.name,
      category: product.category,
      image: null, // We'll upload a new image if needed
    });
    setEditMode(true);
    setEditProductId(product._id);
    setShowForm(true);
  };

  return (
    <div>
      <h2>Product Page</h2>
      <button onClick={() => setShowForm(!showForm)}>Add Product</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Serial Number:</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              required
            />
          </div>
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
            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Image:</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <button type="submit">{editMode ? "Update" : "Submit"}</button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.serialNumber}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                <img
                  src={`http://localhost:8080${product.imageUrl}`} // Assuming the backend returns the image URL
                  alt={product.name}
                  width="50"
                />
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>
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

export default ProductPage;
