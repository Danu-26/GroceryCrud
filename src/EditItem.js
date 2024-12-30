import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditItem() {
  const { productId } = useParams(); // Retrieve the productId from the route
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/Item")
      .then((res) => res.json()) // Correctly parse the JSON
      .then((data) => {
        const foundItem = data.find(
          (item) => item.productId.toString() === productId
        );
        setItem(foundItem); // Set the found item
      })
      .catch((err) => console.error("Error fetching data:", err)); // Add error handling
  }, [productId]); // Include productId in the dependency array

  // Handle cases where item data is not yet loaded
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="add-item-form">
      <h2>Edit Item</h2>
      <form>
        <div className="form-group">
          <label htmlFor="id">Product ID:</label>
          <input
            type="text"
            id="id"
            name="productId"
            className="form-input"
            value={item.productId} // Use value attribute to pre-fill the input
            readOnly // Make it read-only since Product ID is not editable
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="productName"
            className="form-input"
            value={item.productName} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, productName: e.target.value }) // Handle updates
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-input"
            value={item.category} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, category: e.target.value }) // Handle updates
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="unit">Unit of Measurement:</label>
          <input
            type="text"
            id="unit"
            name="unit"
            className="form-input"
            value={item.unit} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, unit: e.target.value }) // Handle updates
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-input"
            value={item.price} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, price: e.target.value }) // Handle updates
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input
            type="number"
            id="discount"
            name="discount"
            className="form-input"
            value={item.discount} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, discount: e.target.value }) // Handle updates
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="stockQuantity">Stock Quantity:</label>
          <input
            type="number"
            id="stockQuantity"
            name="stockQuantity"
            className="form-input"
            value={item.stockQuantity} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, stockQuantity: e.target.value }) // Handle updates
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            className="form-input"
            value={item.expirationDate} // Pre-fill with data
            onChange={(e) =>
              setItem({ ...item, expirationDate: e.target.value }) // Handle updates
            }
          />
        </div>

        <div className="btn-container">
          <button type="submit" className="btn btn-add-item">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
