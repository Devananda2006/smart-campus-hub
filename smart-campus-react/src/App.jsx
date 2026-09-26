import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // API data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search
  const [search, setSearch] = useState("");

  // Registration form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  // Registration message
  const [message, setMessage] = useState("");

  // Saved registration
  const [registration, setRegistration] = useState(null);

  // ------------------------------------------------
  // Load products from API
  // ------------------------------------------------

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

  // ------------------------------------------------
  // Load registration from LocalStorage
  // ------------------------------------------------

  useEffect(function () {
    const savedRegistration =
      localStorage.getItem("registration");

    if (savedRegistration) {
      const parsedRegistration =
        JSON.parse(savedRegistration);

      setRegistration(parsedRegistration);

      setName(parsedRegistration.name);
      setEmail(parsedRegistration.email);
      setDepartment(parsedRegistration.department);
      setYear(parsedRegistration.year);
    }
  }, []);

  // ------------------------------------------------
  // Search products
  // ------------------------------------------------

  const filteredProducts = products.filter(function (product) {
    return product.title
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  // ------------------------------------------------
  // Register student
  // ------------------------------------------------

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

    const studentRegistration = {
      name: name,
      email: email,
      department: department,
      year: year
    };

    // Save to React state
    setRegistration(studentRegistration);

    // Save to LocalStorage
    localStorage.setItem(
      "registration",
      JSON.stringify(studentRegistration)
    );

    setMessage(
      "Registration successful! Your data has been saved."
    );
  }

  // ------------------------------------------------
  // Reset form
  // ------------------------------------------------

  function handleReset() {
    setName("");
    setEmail("");
    setDepartment("");
    setYear("");
    setMessage("");
  }

  // ------------------------------------------------
  // Delete saved registration
  // ------------------------------------------------

  function handleDeleteRegistration() {
    localStorage.removeItem("registration");

    setRegistration(null);

    setName("");
    setEmail("");
    setDepartment("");
    setYear("");

    setMessage("Saved registration deleted.");
  }

  return (
    <div className="app">

      {/* HEADER */}
      <header>
        <h1>Smart Campus OS</h1>
        <p>React + LocalStorage</p>
      </header>

      <main>

        {/* ---------------------------------------- */}
        {/* PRODUCTS */}
        {/* ---------------------------------------- */}

        <section className="products-section">

          <h2>Products from API</h2>

          {/* SEARCH */}
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
              Searching for:{" "}
              <strong>{search}</strong>
            </p>

          </div>

          {/* LOADING */}
          {loading && (
            <p className="status">
              Loading products...
            </p>
          )}

          {/* ERROR */}
          {error && (
            <p className="error">
              {error}
            </p>
          )}

          {/* NO RESULTS */}
          {!loading &&
            !error &&
            filteredProducts.length === 0 && (
              <p className="no-results">
                No products found.
              </p>
            )}

          {/* PRODUCT CARDS */}
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


        {/* ---------------------------------------- */}
        {/* REGISTRATION FORM */}
        {/* ---------------------------------------- */}

        <section className="form-section">

          <h2>Campus Registration</h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={function (event) {
                setName(event.target.value);
              }}
            />


            {/* EMAIL */}
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={function (event) {
                setEmail(event.target.value);
              }}
            />


            {/* DEPARTMENT */}
            <label>Department</label>

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


            {/* YEAR */}
            <label>Year</label>

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


            {/* BUTTONS */}
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


          {/* MESSAGE */}
          {message && (
            <p className="form-message">
              {message}
            </p>
          )}

        </section>


        {/* ---------------------------------------- */}
        {/* SAVED REGISTRATION */}
        {/* ---------------------------------------- */}

        {registration && (

          <section className="saved-section">

            <h2>Saved Registration</h2>

            <div className="registration-card">

              <p>
                <strong>Name:</strong>{" "}
                {registration.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {registration.email}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {registration.department}
              </p>

              <p>
                <strong>Year:</strong>{" "}
                {registration.year}
              </p>

              <button
                className="delete-button"
                onClick={handleDeleteRegistration}
              >
                Delete Saved Registration
              </button>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default App;