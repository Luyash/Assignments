import { Link, useNavigate, useParams } from 'react-router-dom';

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => String(item.id) === String(id),
  );

  if (!product) {
    return (
      <section className="not-found-page">
        <p className="eyebrow">Product</p>
        <h1>Product not found</h1>
        <p>
          This product is not available in the current product list.
        </p>

        <Link to="/" className="primary-button">
          Back to Products
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <section className="details-page">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="details-card">
        <div className="details-image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="details-image"
          />
        </div>

        <div className="details-content">
          <p className="eyebrow">{product.category}</p>

          <h1>{product.title}</h1>

          <div className="details-rating">
            ★ {product.rating?.rate?.toFixed(1) ?? 'N/A'}
          </div>

          <p className="details-price">
            ${product.price.toFixed(2)}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;