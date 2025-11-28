import React, { useEffect } from 'react';
import ProductList from '../components/Product-list';
import Nav from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Crousal from '../components/Crousal';
import Footer from '../components/Footer';
import { fetchProducts } from '../Reducer/index';
import { motion } from 'framer-motion';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    // Logic handled in ProductList or Redux
  };

  return (
    <div className="bg-light min-vh-100">
      <Nav CartCount={cartItems.length} />
      <Crousal />

      {/* Featured Categories */}
      <div className="container my-5">
        <h3 className="fw-bold mb-4 text-center">Featured Categories</h3>
        <div className="row g-4">
          {['Mobiles', 'Fashion', 'Electronics', 'Home'].map((cat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card border-0 shadow-sm text-center p-3 h-100"
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">{cat}</h5>
                  <p className="card-text text-muted">Explore Now</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h3 className="fw-bold mb-4">Best of Electronics</h3>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
