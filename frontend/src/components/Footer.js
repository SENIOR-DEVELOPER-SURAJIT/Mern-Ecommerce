import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #1a1a1a, #2c3e50)',
      color: '#ecf0f1',
      padding: '70px 0 30px',
      borderTop: '5px solid var(--primary-color)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div className="container">
        <div className="row g-5">
          {/* Menu Column */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4" style={{ color: 'var(--primary-color)', letterSpacing: '1px' }}>MENU</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Home</Link>
              </li>
              <li className="mb-3">
                <Link to="/about" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>About</Link>
              </li>
              <li className="mb-3">
                <Link to="/" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Products</Link>
              </li>
              <li className="mb-3">
                <Link to="/mission" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4" style={{ color: 'var(--primary-color)', letterSpacing: '1px' }}>ACCOUNT</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/login" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Login</Link>
              </li>
              <li className="mb-3">
                <Link to="/cart" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Cart</Link>
              </li>
              <li className="mb-3">
                <Link to="/terms" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Terms</Link>
              </li>
              <li className="mb-3">
                <Link to="/privacy" className="footer-link" style={{ color: '#bdc3c7', textDecoration: 'none', transition: '0.3s' }}>Privacy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4" style={{ color: 'var(--primary-color)', letterSpacing: '1px' }}>NEWSLETTER</h5>
            <p style={{ color: '#bdc3c7', marginBottom: '20px' }}>
              Subscribe to get special offers and updates
            </p>
            <div className="d-flex mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{
                  borderRadius: '4px 0 0 4px',
                  border: 'none',
                  padding: '10px 15px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white'
                }}
              />
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 4px 4px 0',
                  padding: '0 20px',
                  fontWeight: '600'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4" style={{ color: 'var(--primary-color)', letterSpacing: '1px' }}>CONTACT US</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt me-3 fs-5" style={{ color: 'var(--primary-color)' }}></i>
                <span style={{ color: '#bdc3c7' }}>Kalyani, 741235</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope me-3 fs-5" style={{ color: 'var(--primary-color)' }}></i>
                <span style={{ color: '#bdc3c7' }}>surajit123mondal@gmail.com</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone me-3 fs-5" style={{ color: 'var(--primary-color)' }}></i>
                <span style={{ color: '#bdc3c7' }}>+91 8777786662</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
                <a key={icon} href="#" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: '0.3s'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`bi bi-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: '#95a5a6', margin: 0, fontSize: '0.9rem' }}>
            © 2024 Softcart Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
