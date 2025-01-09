import React, { useEffect } from 'react';

import Nav from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/cart';
import Footer from '../components/Footer';

import { CHANGE_ORDER_CART, CHANGE_QUANTITY } from '../actions/index';

function CartPages() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch({ type: CHANGE_ORDER_CART, payload: cartItems });
  }, [cartItems, dispatch]);

  const changeQuantity = (quantity, item) => {
    dispatch({ type: CHANGE_QUANTITY, payload: { ...item, quantity } });
  };

  return (
    <>
      <Nav CartCount={cartItems.length} />
      <Cart items={cartItems} order={order} onQuantityChange={changeQuantity} />

      <Footer />
    </>
  );
}

export default CartPages;
