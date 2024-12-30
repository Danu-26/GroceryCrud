import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewItem() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8001/Item/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  if (!item || Object.keys(item).length === 0) {
    return <div>Loading or no data available...</div>;
  }

  return (
    <div className="add-item-form">
      <h2>Product Details</h2>
      <table className="view_details-table">
        <tbody>
          <tr>
            <td>Product ID:</td>
            <td>{item.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{item.productName}</td>
          </tr>
          <tr>
            <td>Category:</td>
            <td>{item.category}</td>
          </tr>
          <tr>
            <td>Unit:</td>
            <td>{item.unit}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{item.price}</td>
          </tr>
          <tr>
            <td>Discount:</td>
            <td>{item.discount}</td>
          </tr>
          <tr>
            <td>Stock Quantity:</td>
            <td>{item.stockQuantity}</td>
          </tr>
          <tr>
            <td>Expiration Date:</td>
            <td>{item.expirationDate}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to="/" className="btn btn-back-view">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ViewItem;
