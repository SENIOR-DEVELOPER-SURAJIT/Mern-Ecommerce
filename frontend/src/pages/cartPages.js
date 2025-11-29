import React, { useEffect } from 'react';

import Nav from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/cart';
import Footer from '../components/Footer';

import { updateQuantity } from '../Reducer/index';

function CartPages() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.order);

  const changeQuantity = (quantity, item) => {
    dispatch(updateQuantity({ id: item.id, quantity }));
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
