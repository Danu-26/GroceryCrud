
import { useNavigate } from "react-router-dom";


function GroceryDetails() {

  const navigate = useNavigate();
  const handleAddItemClick = () => {
    navigate("/farm/additem");
  };

return (
  <div className="container">
    <h1>Danu's Store</h1>
    <div className="table-container">
      <button className="btn" onClick={handleAddItemClick}>
        Add New Item
      </button>
    </div>
  </div>
);
}

export default GroceryDetails;
