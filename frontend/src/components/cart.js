import React from 'react';

const Cart = ({ items, order, onQuantityChange, onRemoveItem }) => {
  // Calculate subtotal, discount, and final total
  const subtotal = items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const discount = (subtotal * order.discount_in_percent) / 100;
  const totalCost = (subtotal + order.shipping_charge - discount).toFixed(2);

  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10);
    onQuantityChange(newQuantity, item); // Pass the new quantity and item to the parent handler
  };

  const handleRemove = (itemId) => {
    if (window.confirm('Are you sure you want to remove this item from cart?')) {
      onRemoveItem(itemId);
    }
  };

  return (
    <div className="container mb-5">
      <div className="d-flex flex-column flex-lg-row align-items-start">
        {/* Cart Items */}
        <div className="col-12 col-lg-8 d-flex flex-column mb-3">
          {items.length > 0 ? (
            items.map((item) => (
              <div className="cart-item p-3 mb-3" key={item.id}>
                <div className="d-flex flex-row align-items-center">
                  <img
                    className="col-3 col-md-2 img-fluid"
                    src={`images/${item.image}.jpg`}
                    alt={item.name}
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="col-5 col-md-6 p-2">
                    <h5 style={{ fontSize: '1rem' }}>{item.name}</h5>
                    <h6 className="text-muted" style={{ fontSize: '0.85rem' }}>{item.category}</h6>
                    <p className="mb-0 fw-bold">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-3 col-md-2 p-2">
                    <select
                      className="form-select form-select-sm"
                      name="quantity"
                      id={`quantity-${item.id}`}
                      value={item.quantity || 1}
                      onChange={(e) => handleQuantityChange(e, item)}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    onClick={() => handleRemove(item.id)}
                    className="col-1 col-md-2 d-flex justify-content-end align-items-center close"
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="bi bi-x-circle text-danger" style={{ fontSize: '1.2rem' }}></i>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <p className="fs-5 text-muted">Your cart is empty.</p>
              <a href="/" className="btn btn-primary">Start Shopping</a>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="col-12 col-lg-4 order p-3">
          <h4>Order Total</h4>
          <div className="d-flex flex-row py-2">
            <input type="text" className="form-control" placeholder="Promo code" />
            <button className="btn btn-primary ms-2">Apply</button>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Subtotal</span>
            <span className="billing-cost">${subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Shipping</span>
            <span className="billing-cost">${order.shipping_charge.toFixed(2)}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Discount ({order.discount_in_percent}%)</span>
            <span className="billing-cost">-${discount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item fs-5 fw-bold">Total</span>
            <span className="billing-cost fs-5 fw-bold">${totalCost}</span>
          </div>

          <div className="d-flex mt-3">
            <button className="btn btn-primary w-100 py-2" onClick={() => window.location.href = '/checkout'}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
