import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Reducer/authSlice';

const Nav = ({ CartCount }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={require('../assets/logo.png')} alt="Softcart Logo" style={{ height: '70px', marginRight: '10px' }} />
          <span style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-dark)' }}>
            <span style={{ color: 'var(--primary-color)' }}>Softcart</span>
            <span className="ms-1">Tech</span>
          </span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-500 px-3" to="/" style={{ color: 'var(--text-dark)' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-500 px-3" to="/about" style={{ color: 'var(--text-dark)' }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-500 px-3" to="/mission" style={{ color: 'var(--text-dark)' }}>Contact</Link>
            </li>

            <li className="nav-item ms-3">
              <Link className="nav-link position-relative" to="/cart">
                <i className="bi bi-cart3 fs-5" style={{ color: 'var(--text-dark)' }}></i>
                {CartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{ backgroundColor: 'var(--primary-color)', fontSize: '0.7rem' }}
                  >
                    {CartCount}
                  </span>
                )}
              </Link>
            </li>

            {userInfo ? (
              <li className="nav-item dropdown ms-2">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ color: 'var(--text-dark)' }}
                >
                  <i className="bi bi-person-circle me-1"></i>
                  {userInfo.name}
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={logoutHandler}>Logout</button></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item ms-2">
                <Link
                  className="btn btn-sm px-4 py-2"
                  to="/login"
                  style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    borderRadius: '25px',
                    fontWeight: 500,
                    border: 'none'
                  }}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
