import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--secondary-color)', color: 'white', padding: '60px 0 20px' }}>
      <div className="container">
        <div className="row g-4">
          {/* Menu Column */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">Menu</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" style={{ color: '#ccc', textDecoration: 'none' }}>About</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}>Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/mission" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/login" style={{ color: '#ccc', textDecoration: 'none' }}>Login</Link>
              </li>
              <li className="mb-2">
                <Link to="/cart" style={{ color: '#ccc', textDecoration: 'none' }}>Cart</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" style={{ color: '#ccc', textDecoration: 'none' }}>Terms</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">Newsletter</h5>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>
              Subscribe to get special offers and updates
            </p>
            <div className="d-flex mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ borderRadius: '4px 0 0 4px' }}
              />
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 4px 4px 0',
                  padding: '0 20px'
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-2 mt-4">
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid #444' }}>
          <p style={{ color: '#999', margin: 0 }}>
            © 2024 Softcart Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
