import React from 'react';
import { motion } from 'framer-motion';

const Productlist = ({ products = [], showToast, handleAddToCart }) => {
  const goToProductDetails = (id) => {
    console.log(`Navigating to product details for product ID: ${id}`);
  };

  const handleAddToCartClick = (product) => {
    handleAddToCart(product);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    // Navigate to cart or checkout
    window.location.href = '/cart';
  };

  return (
    <div className="container mb-5">
      <div id="products" className="row g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
              <motion.div
                whileHover={{ y: -8, boxShadow: 'var(--shadow-md)' }}
                className="card h-100 border"
                style={{
                  borderRadius: 'var(--radius-sm)',
                  borderColor: 'var(--border-color)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="position-relative" style={{ overflow: 'hidden' }}>
                  <img
                    src={`images/${product.image}.jpg`}
                    onClick={() => goToProductDetails(product.id)}
                    className="card-img-top p-3"
                    alt={product.name}
                    style={{
                      cursor: 'pointer',
                      objectFit: 'contain',
                      height: '220px',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>

                <div className="card-body d-flex flex-column text-center px-3 pb-3">
                  <h6 className="card-title fw-600 mb-2" style={{
                    color: 'var(--text-dark)',
                    fontSize: '0.95rem',
                    minHeight: '40px'
                  }}>
                    {product.name}
                  </h6>

                  <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-color)' }}>
                    ${product.price.toFixed(2)}
                  </h5>

                  <div className="mt-auto">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="btn w-100 mb-2"
                      onClick={() => handleAddToCartClick(product)}
                      style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      Add To Cart
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="btn w-100"
                      onClick={() => handleBuyNow(product)}
                      style={{
                        backgroundColor: 'white',
                        color: 'var(--text-dark)',
                        border: '1px solid var(--border-color)',
                        padding: '10px',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted fs-5">No products available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productlist;
