import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productReducer, cartReducer, orderReducer } from './Reducer'; 
import Home from './pages/Home';
import CartPages from './pages/cartPages';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; // Corrected import

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

// Create the root React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} /> {/* Correctly setting Home as the default page */}
            <Route path='cart' element={< CartPages/>} /> {/* Correctly setting Home as the default page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
