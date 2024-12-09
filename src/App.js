import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroceryDetails from "./GroceryDetails";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import ViewItem from "./ViewItem";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GroceryDetails />}></Route>
          <Route path="/farm/additem" element={<AddItem />}></Route>
          <Route path="/farm/edit/:id" element={<EditItem />} />
          <Route path="/farm/viewitem/:id" element={<ViewItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
