import React, { useEffect, useState } from 'react';
import ProductList from '../components/Product-list';
import Nav from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Crousal from '../components/Crousal';
import Footer from '../components/Footer';
import { fetchProducts, addItemToCart } from '../Reducer/index';
import { motion } from 'framer-motion';

function Home() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  // Filter products based on selected category
  const products = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const categories = [
    { name: 'All', icon: '🛍️' },
    { name: 'Mobile', icon: '📱' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Home', icon: '🏠' }
  ];

  return (
    <div className="bg-light min-vh-100">
      <Nav CartCount={cartItems.length} />
      <Crousal />

      {/* Featured Categories */}
      <div className="container my-5">
        <h3 className="fw-bold mb-4 text-center">Shop by Category</h3>
        <div className="row g-4">
          {categories.map((cat, index) => (
            <div className="col-6 col-md-2" key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat.name)}
                className={`card border-0 shadow-sm text-center p-3 h-100 ${selectedCategory === cat.name ? 'bg-primary text-white' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-body">
                  <div className="fs-1 mb-2">{cat.icon}</div>
                  <h6 className={`card-title fw-bold mb-0 ${selectedCategory === cat.name ? 'text-white' : 'text-primary'}`}>
                    {cat.name}
                  </h6>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h3 className="fw-bold mb-4">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          <span className="text-muted fs-6 ms-2">({products.length} items)</span>
        </h3>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
