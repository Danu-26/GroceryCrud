import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import ViewItem from "./ViewItem";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/farm/additem" element={<AddItem />}></Route>
          <Route path="/farm/edit/:id" element={<EditItem />}></Route>
          <Route path="/farm/view/:id" element={<ViewItem />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
