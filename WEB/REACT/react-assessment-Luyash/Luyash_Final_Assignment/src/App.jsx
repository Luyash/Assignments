import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct';
import NotFound from './pages/NotFound';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };

  const addProduct = (product) => {
    setProducts((currentProducts) => [product, ...currentProducts]);
  };

  return (
    <>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                setProducts={setProducts}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetails
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route
            path="/add-product"
            element={<AddProduct addProduct={addProduct} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;