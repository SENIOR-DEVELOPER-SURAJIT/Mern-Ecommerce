import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/Product-list';
import Nav from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Crousal from '../components/Crousal';
import Footer from '../components/Footer';
import WhyShopWithUs from '../components/WhyShopWithUs';
import { fetchProducts, addItemToCart } from '../Reducer/index';
import { motion } from 'framer-motion';

function Home() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  // Get visible products based on count
  const products = filteredProducts.slice(0, visibleCount);

  const handleAddToCart = (product) => {
    if (!userInfo) {
      navigate('/login');
      return;
    }
    dispatch(addItemToCart(product));
  };

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setVisibleCount(8); // Reset to 8 when changing category
  };

  const categories = [
    { name: 'All', icon: '🛍️' },
    { name: 'Mobile', icon: '📱' },
    { name: 'Fashion', icon: '👕' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Home', icon: '🏠' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-gray)' }}>
      <Nav CartCount={cartItems.length} />
      <Crousal />

      {/* Why Shop With Us Section */}
      <WhyShopWithUs />

      {/* Featured Categories */}
      <div className="container my-5">
        <h2 className="section-title">Shop by Category</h2>
        <div className="row g-3 justify-content-center">
          {categories.map((cat, index) => (
            <div className="col-6 col-md-2" key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(cat.name)}
                className={`card text-center p-3 h-100`}
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat.name ? 'var(--primary-color)' : 'white',
                  color: selectedCategory === cat.name ? 'white' : 'var(--text-dark)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="card-body p-2">
                  <div className="fs-1 mb-2">{cat.icon}</div>
                  <h6 className="fw-600 mb-0" style={{ fontSize: '0.9rem' }}>
                    {cat.name}
                  </h6>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <h2 className="section-title">
          {selectedCategory === 'All' ? 'Our Products' : selectedCategory}
        </h2>
        <p className="text-center text-muted mb-4">({filteredProducts.length} items available)</p>
        <ProductList products={products} handleAddToCart={handleAddToCart} />

        {/* See More/See Less Buttons */}
        <div className="text-center my-5">
          {visibleCount < filteredProducts.length && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeMore}
              className="btn btn-primary btn-lg px-5 me-3"
              style={{ borderRadius: '50px' }}
            >
              See More Products
            </motion.button>
          )}

          {visibleCount > 8 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(8)}
              className="btn btn-outline-primary btn-lg px-5"
              style={{ borderRadius: '50px' }}
            >
              See Less
            </motion.button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
