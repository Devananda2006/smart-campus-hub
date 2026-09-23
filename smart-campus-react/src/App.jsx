import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search
  const [search, setSearch] = useState("");

  // Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  // Form message
  const [message, setMessage] = useState("");

  useEffect(function () {
    fetch("https://dummyjson.com/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(function () {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  // Search filtering
  const filteredProducts = products.filter(function (product) {
    return product.title
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  // Form submit
  function handleSubmit(event) {
    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      department === "" ||
      year === ""
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(
      "Registration successful! Welcome, " + name + "."
    );
  }

  // Reset form
  function handleReset() {
    setName("");
    setEmail("");
    setDepartment("");
    setYear("");
    setMessage("");
  }

  return (
    <div className="app">

      {/* Header */}

      <header>
        <h1>Smart Campus OS</h1>
        <p>React Forms and User Input</p>
      </header>

      <main>

        {/* Products */}

        <section className="products-section">

          <h2>Products from API</h2>

          <div className="search-section">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={function (event) {
                setSearch(event.target.value);
              }}
            />

            <p>
              Searching for: <strong>{search}</strong>
            </p>

          </div>

          {loading && (
            <p className="status">
              Loading products...
            </p>
          )}

          {error && (
            <p className="error">
              {error}
            </p>
          )}

          {!loading &&
            !error &&
            filteredProducts.length === 0 && (
              <p className="no-results">
                No products found.
              </p>
            )}

          <div className="product-grid">

            {filteredProducts.map(function (product) {

              return (
                <div
                  className="product-card"
                  key={product.id}
                >

                  <h3>{product.title}</h3>

                  <p className="price">
                    ${product.price}
                  </p>

                  <p className="description">
                    {product.description}
                  </p>

                </div>
              );

            })}

          </div>

        </section>

        {/* Registration Form */}

        <section className="form-section">

          <h2>Campus Registration</h2>

          <form onSubmit={handleSubmit}>

            <label>
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={function (event) {
                setName(event.target.value);
              }}
            />

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={function (event) {
                setEmail(event.target.value);
              }}
            />

            <label>
              Department
            </label>

            <select
              value={department}
              onChange={function (event) {
                setDepartment(event.target.value);
              }}
            >

              <option value="">
                Select department
              </option>

              <option value="CSE">
                Computer Science and Engineering
              </option>

              <option value="ECE">
                Electronics and Communication Engineering
              </option>

              <option value="EEE">
                Electrical and Electronics Engineering
              </option>

              <option value="ME">
                Mechanical Engineering
              </option>

              <option value="CE">
                Civil Engineering
              </option>

            </select>

            <label>
              Year
            </label>

            <select
              value={year}
              onChange={function (event) {
                setYear(event.target.value);
              }}
            >

              <option value="">
                Select year
              </option>

              <option value="1">
                First Year
              </option>

              <option value="2">
                Second Year
              </option>

              <option value="3">
                Third Year
              </option>

              <option value="4">
                Fourth Year
              </option>

            </select>

            <div className="form-buttons">

              <button type="submit">
                Register
              </button>

              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Reset
              </button>

            </div>

          </form>

          {message && (
            <p className="form-message">
              {message}
            </p>
          )}

        </section>

      </main>

    </div>
  );
}

export default App;