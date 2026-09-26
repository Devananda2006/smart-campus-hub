import { useEffect, useState } from "react";

function Products() {
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
    <div className="page">

      <h1>Products</h1>

      <p>
        Products loaded from an external API.
      </p>

      {loading && (
        <p>Loading products...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      <div className="product-grid">

        {products.map(function (product) {
          return (
            <div
              className="product-card"
              key={product.id}
            >
              <h2>{product.title}</h2>

              <p className="price">
                ${product.price}
              </p>

              <p>
                {product.description}
              </p>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Products;