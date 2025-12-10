import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileNavbar = () => {
    const { items } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="mobile-navbar">
            <Link to="/" className={`mobile-nav-item ${isActive('/')}`}>
                <div className="icon-container">
                    <i className="bi bi-house"></i>
                </div>
                <span>Home</span>
            </Link>

            <Link to="/" className={`mobile-nav-item ${isActive('/shop')}`}>  {/* Assuming Shop is Home or add a Shop page later */}
                <div className="icon-container">
                    <i className="bi bi-grid"></i>
                </div>
                <span>Shop</span>
            </Link>

            <Link to="/cart" className={`mobile-nav-item ${isActive('/cart')}`}>
                <div className="icon-container position-relative">
                    <i className="bi bi-cart3"></i>
                    {items.length > 0 && (
                        <span className="mobile-cart-badge">
                            {items.length}
                        </span>
                    )}
                </div>
                <span>Cart</span>
            </Link>

            <Link to={userInfo ? "/profile" : "/login"} className={`mobile-nav-item ${isActive('/profile') || isActive('/login')}`}>
                <div className="icon-container">
                    <i className={`bi ${userInfo ? 'bi-person' : 'bi-box-arrow-in-right'}`}></i>
                </div>
                <span>{userInfo ? 'Profile' : 'Login'}</span>
            </Link>
        </nav>
    );
};

export default MobileNavbar;
