import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Smart Campus OS</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/products">Products</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </nav>
  );
}

export default Navbar;