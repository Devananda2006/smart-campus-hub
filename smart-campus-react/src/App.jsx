import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <div className="app">

      <header>
        <h1>Smart Campus OS</h1>
        <p>Learning React by working with real APIs</p>
      </header>

      <main>

        <h2>Products from API</h2>

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

        <div className="product-grid">

          {products.map(function (product) {

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