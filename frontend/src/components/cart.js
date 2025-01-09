import React from 'react';

const Cart = ({ items, order, onQuantityChange }) => {
  // Calculate subtotal, discount, and final total
  const subtotal = items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const discount = (subtotal * order.discount_in_percent) / 100;
  const totalCost = (subtotal + order.shipping_charge - discount).toFixed(2);

  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10);
    onQuantityChange(newQuantity, item); // Pass the new quantity and item to the parent handler
  };

  return (
    <div className="container mb-5">
      <div className="d-flex flex-row align-items-start">
        {/* Cart Items */}
        <div className="col-8 d-flex flex-column m-2">
          {items.length > 0 ? (
            items.map((item) => (
              <div className="cart-item p-3" key={item.id}>
                <div className="d-flex flex-row">
                  <img
                    className="col-2 img-fluid"
                    src={`images/${item.image}.jpg`}
                    alt={item.name}
                  />
                  <div className="col-6 p-2">
                    <h5>{item.name}</h5>
                    <h6>{item.category}</h6>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="col-2 p-2">
                    Quantity
                    <select
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
                    data-bs-toggle="modal"
                    data-bs-target="#removeItemModal"
                    className="col-2 d-flex justify-content-end align-items-start close"
                  >
                    <i className="bi bi-x-circle"></i>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="col-4 order p-3 m-2">
          <h4>Order Total</h4>
          <div className="d-flex flex-row py-2">
            <input type="text" className="form-control" placeholder="Promo code" />
            <button className="btn btn-primary">Apply</button>
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
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item fs-5">Total</span>
            <span className="billing-cost fs-5">${totalCost}</span>
          </div>

          <div className="d-flex mt-3">
            <a href="/checkout.html" className="btn btn-primary flex-grow-1">
              Pay Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
