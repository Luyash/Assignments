import { useEffect, useState } from 'react';

import Loading from '../component/Loading';
import ProductList from '../component/ProductList';

const API_URL = 'http://localhost:3000/products';

function Home({ products, setProducts, addToCart }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Unable to fetch products.');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('We could not load the products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-state">
        <h1>Something went wrong</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <ProductList
      products={products}
      addToCart={addToCart}
    />
  );
}

export default Home;