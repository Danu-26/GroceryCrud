import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddItem({ addItem }) {
  const [id, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [validation, setValidation] = useState(false);

  // const [productImage, setProductImage] = useState(null);

  const navigate = useNavigate();
  const handleFormData = (e) => {
    e.preventDefault();
    const data = {
      id,
      productName,
      category,
      unit,
      price,
      discount,
      stockQuantity,
      expirationDate,
    };
    console.log({
      id,
      productName,
      category,
      unit,
      price,
      discount,
      stockQuantity,
      expirationDate,
    });
    fetch("http://localhost:8001/Item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        alert("Item added successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="add-item-form">
      <h2>Add Item</h2>
      <form onSubmit={handleFormData}>
        <div className="form-group">
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            className="form-input"
            value={id}
            onChange={(e) => setProductId(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {id.length === 0 && validation && (
            <span className="err">Please enter item id </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="productName"
            className="form-input"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {productName.length === 0 && validation && (
            <span className="err">Please enter product name </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {category.length === 0 && validation && (
            <span className="err">Please enter item category</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="unit">Unit of Measurement:</label>
          <input
            type="text"
            id="unit"
            name="unit"
            className="form-input"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {unit.length === 0 && validation && (
            <span className="err">Please enter item unit </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {price.length === 0 && validation && (
            <span className="err">Please enter price </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input
            type="number"
            id="discount"
            name="discount"
            className="form-input"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {discount.length === 0 && validation && (
            <span className="err">Please enter item discount </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="stockQuantity">Stock Quantity:</label>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            className="form-input"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {stockQuantity.length === 0 && validation && (
            <span className="err">Please enter stock quantity</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            className="form-input"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
            onMouseDown={() => setValidation(true)}
          />
          {expirationDate.length === 0 && validation && (
            <span className="err">Please enter item expiration date </span>
          )}
        </div>

        {/* <div className="form-group">
          <label>Product Image:</label>
          <input
            type="file"
            name="productImage"
            className="form-input"
            value={productImage}
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div> */}
        <div className="btn-container">
          <button type="submit" className="btn btn-add-item">
            Add Item
          </button>
          <Link to="/" className="btn btn-back">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
