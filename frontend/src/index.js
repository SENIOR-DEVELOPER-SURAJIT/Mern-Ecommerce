import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Reducer';
import Home from './pages/Home';
import CartPages from './pages/cartPages';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Create the root React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path='cart' element={<CartPages />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password/:token' element={<ResetPassword />} />
            <Route path='about' element={<About />} />
            <Route path='terms' element={<Terms />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='mission' element={<Mission />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
