import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Products from "./pages/Products";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;