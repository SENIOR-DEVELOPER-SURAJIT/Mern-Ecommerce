import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../Reducer/authSlice';
import { motion } from 'framer-motion';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(null);

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
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(register({ name, email, password, phone }));
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card shadow-lg p-4"
                style={{ maxWidth: '450px', width: '100%', borderRadius: '15px', border: 'none' }}
            >
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">Create Account</h2>
                    <p className="text-muted">Join us for the best shopping experience</p>
                </div>

                {message && <div className="alert alert-danger">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {loading && <div className="alert alert-info">Loading...</div>}

                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ borderRadius: '10px' }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ borderRadius: '10px' }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ borderRadius: '10px' }}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                        Sign Up
                    </motion.button>
                </form>

                <div className="text-center mt-3">
                    <p className="mb-0">
                        Already have an account?{' '}
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} className="text-primary fw-bold text-decoration-none">
                            Login
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
