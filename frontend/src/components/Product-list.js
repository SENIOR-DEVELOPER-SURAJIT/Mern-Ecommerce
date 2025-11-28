import React from 'react';
import { motion } from 'framer-motion';

const Productlist = ({ products = [], showToast, handleAddToCart }) => {
  const goToProductDetails = (id) => {
    console.log(`Navigating to product details for product ID: ${id}`);
    // Implement navigation logic here (e.g., using React Router)
  };

  const handleAddToCartClick = (product) => {
    handleAddToCart(product);
  };

  return (
    <div className="container mb-5">
      <div id="products" className="row g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="card product-item h-100 border-0 shadow-sm overflow-hidden"
                style={{ borderRadius: '15px' }}
              >
                <div className="position-relative">
                  <span className="badge bg-danger position-absolute top-0 start-0 m-3">Sale</span>
                  <i className="bi bi-heart position-absolute top-0 end-0 m-3 fs-5 text-muted" style={{ cursor: 'pointer' }}></i>
                  <img
                    src={`images/${product.image}.jpg`}
                    onClick={() => goToProductDetails(product.id)}
                    className="card-img-top p-4"
                    alt={product.name}
                    style={{ cursor: 'pointer', objectFit: 'contain', height: '250px' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6 className="card-subtitle mb-2 text-muted fw-light text-uppercase small">{product.category}</h6>
                  <h5 className="card-title fw-bold text-dark mb-3">{product.name}</h5>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="h5 mb-0 fw-bold text-primary">${product.price.toFixed(2)}</span>
                      <div className="text-warning small">
                        {Array(product.rating).fill().map((_, i) => (
                          <i className="bi bi-star-fill" key={i}></i>
                        ))}
                      </div>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary w-100 rounded-pill"
                      onClick={() => handleAddToCartClick(product)}
                    >
                      Add To Cart
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
