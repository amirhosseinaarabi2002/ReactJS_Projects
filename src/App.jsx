import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      const retry = 3;

      for (let attempt = 1; attempt <= retry; attempt++) {
        try {
          setLoading(true);
          setError(null);

          const res = await fetch("https://fakestoreapi.com/products", {
            signal: controller.signal,
          });

          console.log(res);

          if (!res.ok) {
            throw new Error("Failed to fetch products");
          }

          const data = await res.json();
          return setProducts(data);
        } catch (err) {
          if (attempt === retry) {
            setError(err.message);
          }

          const backoffTime = 2 ** (attempt - 1) * 1000;
          await new Promise((res) => setTimeout(res, backoffTime));
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // clean up
    };
  }, []);

  if (loading) {
    return <p>wait for a minute...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>
          {product.id}. {product.title}
        </p>
      ))}
    </div>
  );
}

export default App;
