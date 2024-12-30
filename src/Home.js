import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [items, setItems] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/Item")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const displayDetails = (id) => {
    //  console.log(id);
    navigate("/farm/view/" + id);
  };

    const editDetails = (id) => {
      navigate("/farm/edit/" + id);
    };

  return (
    <div className="container">
      <h1>Danu's Store</h1>
      <div className="table-container">
        <Link to="/farm/additem" className="btn btn-add">
          Add product
        </Link>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ProductId</th>
              <th>Name</th>
              <th>Category</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Discount</th>
              <th>StockQuantity</th>
              <th>ExpirationDate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.productName}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{item.discount}</td>
                  <td>{item.stockQuantity}</td>
                  <td>{item.expirationDate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-action btn-view"
                      onClick={() => displayDetails(item.id)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-action btn-edit"
                      onClick={() => editDetails(item.id)}
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-action btn-delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
