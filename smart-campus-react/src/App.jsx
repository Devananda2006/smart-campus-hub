import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter(function (product) {

    return product.title
      .toLowerCase()
      .includes(search.toLowerCase());

  });

  return (
    <div className="app">

      <header>
        <h1>Smart Campus OS</h1>
        <p>React API Search Project</p>
      </header>

      <main>

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

        {!loading && !error && filteredProducts.length === 0 && (
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

      </main>

    </div>
  );
}

export default App;