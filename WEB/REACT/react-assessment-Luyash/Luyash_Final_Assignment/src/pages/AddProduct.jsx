import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  name: '',
  price: '',
  image: '',
  category: '',
};

const categories = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

function AddProduct({ addProduct }) {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Product name is required.';
    }

    if (!form.price || Number(form.price) <= 0) {
      newErrors.price = 'Price must be a positive number.';
    }

    if (!form.image.trim()) {
      newErrors.image = 'Image URL is required.';
    } else {
      try {
        const url = new URL(form.image);

        if (!['http:', 'https:'].includes(url.protocol)) {
          newErrors.image = 'Enter a valid image URL.';
        }
      } catch {
        newErrors.image = 'Enter a valid image URL.';
      }
    }

    if (!form.category) {
      newErrors.category = 'Please select a category.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = {
      id: `custom-${Date.now()}`,
      title: form.name.trim(),
      price: Number(form.price),
      image: form.image.trim(),
      category: form.category,
      description: 'A product added from the product form.',
      rating: {
        rate: 0,
        count: 0,
      },
    };

    addProduct(newProduct);

    setForm(initialForm);
    setErrors({});

    navigate('/');
  };

  return (
    <section className="form-page">
      <div className="form-header">
        <p className="eyebrow">Product management</p>
        <h1>Add New Product</h1>
        <p>
          Add a product to the top of the product list.
        </p>
      </div>

      <form className="product-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Product Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />

          {errors.name && (
            <p className="field-error">{errors.name}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="price">Price</label>

          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
          />

          {errors.price && (
            <p className="field-error">{errors.price}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="image">Image URL</label>

          <input
            id="image"
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />

          {errors.image && (
            <p className="field-error">{errors.image}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="field-error">{errors.category}</p>
          )}
        </div>

        <button type="submit" className="primary-button">
          Add Product
        </button>
      </form>
    </section>
  );
}

export default AddProduct;