import { useMemo, useState } from 'react';

import ProductCard from './ProductCard';
import SortDropdown from './SortDropdown';

function ProductList({ products, addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const displayedProducts = useMemo(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (sortOrder === 'low-high') {
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    }

    if (sortOrder === 'high-low') {
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  }, [products, searchTerm, sortOrder]);

  return (
    <section className="product-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Our collection</p>
          <h1>Products</h1>
        </div>

        <p className="product-count">
          {displayedProducts.length} products
        </p>
      </div>

      <div className="product-controls">
        <div className="search-wrapper">
          <label htmlFor="product-search">Search products</label>

          <input
            id="product-search"
            type="search"
            placeholder="Search by product name..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <SortDropdown
          value={sortOrder}
          onChange={setSortOrder}
        />
      </div>

      {displayedProducts.length === 0 ? (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try changing your search.</p>
        </div>
      ) : (
        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating?.rate ?? 0}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;