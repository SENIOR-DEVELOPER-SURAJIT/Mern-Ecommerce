import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../Reducer/authSlice';
import { motion } from 'framer-motion';
import { FaGoogle, FaPhoneAlt } from 'react-icons/fa';
import { signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth, googleProvider } from '../firebase.config';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);

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

    const handleGoogleLogin = async () => {
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
            console.error("Google Sign-In Error:", error);
            alert(error.message);
        }
    };

    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => { },
                'expired-callback': () => { }
            });
        }
    }

    const handlePhoneLogin = () => {
        setShowPhoneInput(true);
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
            window.recaptchaVerifier = null;
        }
    };

    const requestOtp = () => {
        const cleanPh = phoneNumber.replace(/[^0-9]/g, '');
        if (cleanPh.length !== 10) {
            alert("Please enter a valid 10-digit Indian mobile number");
            return;
        }

        onCaptchVerify();
        const appVerifier = window.recaptchaVerifier;
        const formatPh = '+91' + cleanPh;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowOtpInput(true);
                alert("OTP Sent to " + formatPh);
            }).catch((error) => {
                console.error(error);
                alert("Error sending OTP: " + error.message);
                if (window.recaptchaVerifier) {
                    window.recaptchaVerifier.clear();
                    window.recaptchaVerifier = null;
                }
            });
    };

    const verifyOtp = () => {
        if (otp.length !== 6) {
            alert("Please enter a 6-digit OTP");
            return;
        }
        window.confirmationResult.confirm(otp).then(async (result) => {
            const user = result.user;
            const { data } = await axios.post('http://localhost:5000/api/auth/social-login', {
                phone: user.phoneNumber,
                uid: user.uid
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            window.location.reload();
        }).catch((error) => {
            console.error(error);
            alert("Invalid OTP: " + error.message);
        });
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
                        Login to Softcart
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                        Welcome back! Please login to your account.
                    </p>

                    {error && <div className="alert alert-danger mb-3">{error}</div>}

                    {!showPhoneInput ? (
                        <>
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                        Username
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
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Your Password"
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

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/forgot-password" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                                        Forgot Password?
                                    </Link>
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
                                    {loading ? 'Loading...' : 'Login'}
                                </button>
                            </form>

                            <div className="text-center mb-3" style={{ color: 'var(--text-muted)' }}>
                                Or login with
                            </div>

                            <div className="d-flex gap-2 mb-4">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center"
                                    style={{ padding: '12px' }}
                                >
                                    <FaGoogle className="me-2" /> Google
                                </button>
                                <button
                                    onClick={handlePhoneLogin}
                                    className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center"
                                    style={{ padding: '12px' }}
                                >
                                    <FaPhoneAlt className="me-2" /> Phone
                                </button>
                            </div>

                            <div className="text-center">
                                <span style={{ color: 'var(--text-muted)' }}>New User? </span>
                                <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'} style={{ color: 'var(--primary-color)', fontWeight: 600, textDecoration: 'none' }}>
                                    Sign Up
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div id="recaptcha-container"></div>
                            {!showOtpInput ? (
                                <div>
                                    <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                        Indian Mobile Number
                                    </label>
                                    <div className="input-group input-group-lg mb-3">
                                        <span className="input-group-text">+91</span>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="9876543210"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            maxLength="10"
                                        />
                                    </div>
                                    <button onClick={requestOtp} className="btn btn-primary w-100 mb-2">Send OTP</button>
                                    <button onClick={() => setShowPhoneInput(false)} className="btn btn-link w-100">Back to Login</button>
                                </div>
                            ) : (
                                <div>
                                    <label style={{ fontWeight: 500, marginBottom: '8px', display: 'block' }}>
                                        Enter OTP
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg mb-3"
                                        placeholder="123456"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        maxLength="6"
                                    />
                                    <button onClick={verifyOtp} className="btn btn-success w-100">Verify OTP</button>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Right Side - Image */}
            <div style={{
                flex: 1,
                backgroundImage: `url(${require('../assets/login_bg_custom.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay for readability
                    zIndex: 1
                }}></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', color: 'white', zIndex: 2, position: 'relative' }}
                >
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '20px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        Welcome Back!
                    </h1>
                    <p style={{ fontSize: '1.4rem', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                        Login to access your account and continue shopping
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
