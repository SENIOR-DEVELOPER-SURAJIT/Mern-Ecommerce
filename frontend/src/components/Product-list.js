import React from 'react';

const Productlist = ({ products = [], showToast, handleAddToCart }) => {
  const goToProductDetails = (id) => {
    console.log(`Navigating to product details for product ID: ${id}`);
    // Implement navigation logic here (e.g., using React Router)
  };

  const handleAddToCartClick = (product) => {
    handleAddToCart(product); // Dispatch the action to add the entire product
  
  };

  return (
    <div className="container mb-5">
      <div id="products" className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-6 position-relative" key={product.id}>
            <div className="card product-item">
              {/* Ensure no unexpected elements are rendered here */}
              <i className="bi bi-heart-fill position-absolute liked"></i>
              <i className="bi bi-heart position-absolute like"></i>
              <img 
                src={`images/${product.image}.jpg`} 
                onClick={() => goToProductDetails(product.id)} 
                className="card-img-top" 
                alt={product.name} 
              />
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted fw-light">{product.category}</h6>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text price">
                  ${product.price.toFixed(2)} 
                  <span className="float-end rating-stars">
                    {Array(product.rating).fill().map((_, i) => (
                      <i className="bi bi-star-fill" key={i}></i>
                    ))}
                  </span>
                </p>
                <div className="text-center">
                  <button 
                    className="btn btn-dark w-100" 
                    onClick={() => handleAddToCartClick(product)} // Pass the whole product to the handler
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          ))
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Productlist;
