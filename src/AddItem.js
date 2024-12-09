import { useState } from "react";

function AddItem() {
    const handleAddItem = () => {
      const [productId, setProductId] = useState("");
      const [productName, setproductName] = useState("");
       const [category, setCategory] = useState("");
        const [unit, setUnit] = useState("");
         const [price, setPrice] = useState("");
          const [discount, setDiscount] = useState("");
           const [stockQuantity, setStockQuantity] = useState("");
            const [expirationDate, setExpirationDate] = useState("");
             const [productImage, setProductImage] = useState("");
    };
  return (
    <div className="add-item-form">
      <h2>Add Item</h2>
      <form>
        <div className="form-group">
          <label>Product ID:</label>
          <input type="text" name="productId" className="form-input" />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="productName" className="form-input" />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" className="form-input" />
        </div>
        <div className="form-group">
          <label>Unit of Measurement:</label>
          <input type="text" name="unitOfMeasurement" className="form-input" />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" className="form-input" />
        </div>
        <div className="form-group">
          <label>Discount:</label>
          <input type="number" name="discount" className="form-input" />
        </div>
        <div className="form-group">
          <label>Stock Quantity:</label>
          <input type="number" name="stockQuantity" className="form-input" />
        </div>
        <div className="form-group">
          <label>Expiration Date:</label>
          <input type="date" name="expirationDate" className="form-input" />
        </div>
        <div className="form-group">
          <label>Product Image:</label>
          <input type="file" name="productImage" className="form-input" />
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="add-btn"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}




//Product ID
//Name
//Category
//Unit of Measurement
//Price
//Discount
//Stock Quantity
//Expiration Date
//ProductImage



export default AddItem;
