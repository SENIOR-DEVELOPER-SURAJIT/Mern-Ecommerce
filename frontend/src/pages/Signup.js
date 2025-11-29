import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../Reducer/authSlice';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../firebase.config';
import axios from 'axios';

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

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const { data } = await axios.post('http://localhost:5000/api/auth/social-login', {
                email: user.email,
                name: user.displayName,
                googleId: user.uid,
                avatar: user.photoURL
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            window.location.reload();
        } catch (error) {
            console.error("Google Sign-Up Error:", error);
            alert(error.message);
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Left Side - Form */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'white'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', maxWidth: '450px' }}
                >
                    {/* Back Button */}
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: 'var(--text-muted)',
                            textDecoration: 'none',
                            marginBottom: '20px',
                            fontSize: '0.95rem'
                        }}
                    >
                        <i className="bi bi-arrow-left me-2"></i> Back to Home
                    </Link>

                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        marginBottom: '10px'
                    }}>
                        Create Account
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        Join us for the best shopping experience
                    </p>

                    {message && <div className="alert alert-danger mb-3">{message}</div>}
                    {error && <div className="alert alert-danger mb-3">{error}</div>}

                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    padding: '12px 15px'
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="your.email@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    padding: '12px 15px'
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                Phone Number (Optional)
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="9876543210"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    padding: '12px 15px'
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    padding: '12px 15px'
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '4px',
                                    padding: '12px 15px'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn w-100 mb-3"
                            disabled={loading}
                            style={{
                                backgroundColor: 'var(--primary-color)',
                                color: 'white',
                                border: 'none',
                                padding: '14px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                borderRadius: '4px'
                            }}
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="text-center mb-3" style={{ color: 'var(--text-muted)' }}>
                        Or sign up with
                    </div>

                    <button
                        onClick={handleGoogleSignup}
                        className="btn btn-outline-secondary w-100 mb-4 d-flex align-items-center justify-content-center"
                        style={{ padding: '12px' }}
                    >
                        <FaGoogle className="me-2" /> Google
                    </button>

                    <div className="text-center">
                        <span style={{ color: 'var(--text-muted)' }}>Already have an account? </span>
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none' }}>
                            Login
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Image */}
            <div style={{
                flex: 1,
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', color: 'white' }}
                >
                    <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
                        Join Softcart!
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                        Create an account and start your shopping journey with us
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
