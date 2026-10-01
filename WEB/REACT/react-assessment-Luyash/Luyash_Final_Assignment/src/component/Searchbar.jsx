import PropTypes from 'prop-types';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <label htmlFor="product-search">Search products</label>

      <input
        id="product-search"
        type="search"
        placeholder="Search by product name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;