import { Link, NavLink } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          ShopList
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/add-product"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Add Product
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'nav-link cart-link active' : 'nav-link cart-link'
            }
          >
            Cart
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;