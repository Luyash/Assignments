import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProductCard({ id, name, price, image, rating, onAddToCart }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    onAddToCart();
  };

  return (
    <article className="product-card" onClick={handleCardClick}>
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
      </div>

      <div className="product-card-content">
        <h3 className="product-name">{name}</h3>

        <div className="product-meta">
          <span className="product-price">${price.toFixed(2)}</span>

          <span className="product-rating">
            ★ {rating.toFixed(1)}
          </span>
        </div>

        <button
          type="button"
          className="add-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;