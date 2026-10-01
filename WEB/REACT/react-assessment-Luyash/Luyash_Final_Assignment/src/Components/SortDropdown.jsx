import PropTypes from 'prop-types';

function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-wrapper">
      <label htmlFor="sort-products">Sort by</label>

      <select
        id="sort-products"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Default</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>
  );
}

SortDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SortDropdown;