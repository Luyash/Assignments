import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <p className="eyebrow">Your cart</p>
        <h1>Your cart is empty</h1>
        <p>Add some products to see them here.</p>

        <Link to="/" className="primary-button">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h1>Your Cart</h1>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <h2>{item.title}</h2>

                <p>
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>

              <button
                type="button"
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>
              {cart.reduce(
                (total, item) => total + item.quantity,
                0,
              )}
            </span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>

          <button type="button" className="primary-button full-width">
            Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;