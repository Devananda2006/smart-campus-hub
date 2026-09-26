import { BrowserRouter, Routes, Route } from "react-router-dom";

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

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Events */}
        <Route
          path="/events"
          element={<Events />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* Registration */}
        <Route
          path="/registration"
          element={<Registration />}
        />

      </Routes>

    </BrowserRouter>
  );
}