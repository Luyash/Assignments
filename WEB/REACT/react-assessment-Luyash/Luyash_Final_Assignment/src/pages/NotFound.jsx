import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found-page">
      <p className="error-code">404</p>

      <h1>Page not found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="primary-button">
        Back to Products
      </Link>
    </section>
  );
}

export default NotFound;