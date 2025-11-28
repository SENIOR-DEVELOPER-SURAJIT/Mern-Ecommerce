import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../Reducer/authSlice';
import { motion } from 'framer-motion';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { userInfo, loading, error } = useSelector((state) => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card shadow-lg p-4"
                style={{ maxWidth: '400px', width: '100%', borderRadius: '15px', border: 'none' }}
            >
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">Welcome Back</h2>
                    <p className="text-muted">Login to continue shopping</p>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                {loading && <div className="alert alert-info">Loading...</div>}

                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ borderRadius: '10px' }}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ borderRadius: '10px' }}
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn btn-primary w-100 btn-lg mb-3"
                        style={{ borderRadius: '10px', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', border: 'none' }}
                    >
                        Login
                    </motion.button>
                </form>

                <div className="text-center mb-3">
                    <span className="text-muted">OR</span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-outline-dark w-100 mb-2 d-flex align-items-center justify-content-center"
                    style={{ borderRadius: '10px' }}
                >
                    <FaGoogle className="me-2" /> Sign in with Google
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-outline-secondary w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{ borderRadius: '10px' }}
                >
                    <FaPhoneAlt className="me-2" /> Sign in with Phone
                </motion.button>

                <div className="text-center mt-3">
                    <p className="mb-0">
                        New Customer?{' '}
                        <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'} className="text-primary fw-bold text-decoration-none">
                            Register Here
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
