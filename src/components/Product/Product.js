import React, { useState, useEffect } from "react";

const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [editingProductId, setEditingProductId] = useState(null); // Track the product being edited

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await fetch("http://localhost:8080/api/category");
        const categoriesData = await categoryRes.json();
        setCategories(categoriesData);
        console.log(categoriesData);
        

        const productRes = await fetch("http://localhost:8080/api/product");
        const productsData = await productRes.json();
        setProducts(productsData);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Preview the selected image
  };

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
    setEditMode(false);
    setEditingProductId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const url = editMode
        ? `http://localhost:8080/api/product/${editingProductId}`
        : "http://localhost:8080/api/product";

      const response = await fetch(url, {
        method: editMode ? "PUT" : "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to process product.");
      }

      if (editMode) {
        // Update product in the state
        setProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod._id === editingProductId ? data.updatedProduct : prod
          )
        );
        alert("Product updated successfully.");
      } else {
        setProducts([...products, data.newProduct]); // Add new product
        alert("Product added successfully.");
      }

      resetForm();
      setShowForm(false); // Hide the form after submission
    } catch (err) {
      setError(err.message || "An error occurred while processing the product.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setTitle(product.title);
    setCategory(product.category._id);
    setDescription(product.description);
    setImagePreview(product.imageUrl);
    setShowForm(true);
    setEditMode(true);
    setEditingProductId(product._id); // Set product ID for editing
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/product/${productId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to delete product.");
      }

      setProducts(products.filter((prod) => prod._id !== productId)); // Remove from state
      alert("Product deleted successfully.");
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  return (
    <div>
      <h1>Product Management</h1>

      {/* Toggle Form Button */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add Product"}
      </button>

      {/* Conditionally Render Form */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h2>{editMode ? "Edit Product" : "Add New Product"}</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label>Select Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label>Image:</label>
            <input type="file" onChange={handleImageChange} />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" width="100" />
            )}
          </div>
          <button type="submit" disabled={loading}>
            {loading
              ? editMode
                ? "Updating Product..."
                : "Adding Product..."
              : editMode
              ? "Update Product"
              : "Add Product"}
          </button>
        </form>
      )}

      {/* Structured Product List */}
      <div>
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
  {products.map((product, index) => (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      {/* Access category information from the product's category field */}
      <td>{product.category?.name || "No Category"}</td> {/* Display category name */}
      <td>{product.description}</td>
      <td>
        {/* Display product image */}
        <img src={product.imageUrl} alt={product.title} width="100" />
      </td>
      <td>
        <button onClick={() => handleEdit(product)}>Edit</button>
        <button onClick={() => handleDelete(product._id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>


          </table>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
