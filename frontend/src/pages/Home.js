import React from 'react';
import ProductList from '../components/Product-list';
import Nav from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Crousal from '../components/Crousal';
import Footer from '../components/Footer';
import { addItemToCart } from '../Reducer/index'; // Import from the cartSlice actions

function Home() {
  const dispatch = useDispatch();

  // Access cart and product states using useSelector
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products);

  // Function to handle adding item to cart
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); // Dispatch the whole product object
    showToast(product.id); // Call the toast function with product ID
  };

  // Toast message logic
  const showToast = (id) => {
    console.log(`Product ID ${id} added to cart`);
    // You can implement a toast notification here
   // For demo purposes
  };

  return (
    <>
      <Nav CartCount={cartItems.length} />
      <Crousal />
      <ProductList products={products} handleAddToCart={handleAddToCart}  />
      <Footer />
    </>
  );
}

export default Home;
