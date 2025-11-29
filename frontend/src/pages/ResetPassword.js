import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { token } = useParams();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        setError('');
        setMessage('');

        try {
            const { data } = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
            setMessage(data.message || 'Password reset successful!');
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Error resetting password');
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
                        Reset Password
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        Enter your new password below
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
                        <div className="mb-3">
                            <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                New Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength="6"
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
                                placeholder="Confirm new password"
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
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
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
                        New Password
                    </h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                        Choose a strong password to secure your account
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default ResetPassword;
