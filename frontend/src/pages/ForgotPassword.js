import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            setMessage(data.message || 'Password reset link sent to your email!');
            setEmail('');
        } catch (err) {
            setError(err.response?.data?.message || 'Error sending reset email');
        } finally {
            setLoading(false);
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
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        marginBottom: '10px'
                    }}>
                        Forgot Password?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        No worries! Enter your email and we'll send you a reset link.
                    </p>

                    {message && (
                        <div className="alert alert-success mb-3">
                            {message}
                        </div>
                    )}
                    {error && (
                        <div className="alert alert-danger mb-3">
                            {error}
                        </div>
                    )}

                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
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
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none' }}>
                            ← Back to Login
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Gradient */}
            <div style={{
                flex: 1,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                        Reset Password
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                        We'll help you get back into your account
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ForgotPassword;
