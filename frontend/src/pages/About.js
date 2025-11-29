import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    const features = [
        { icon: '📦', title: 'Wide Range of Products', desc: 'Explore thousands of quality products across categories' },
        { icon: '💰', title: 'Competitive Pricing', desc: 'Best prices guaranteed with regular deals and offers' },
        { icon: '🔒', title: 'Secure Payments', desc: 'Multiple secure payment options for your convenience' },
        { icon: '🚚', title: 'Fast Delivery', desc: 'Quick and reliable delivery to your doorstep' },
        { icon: '💬', title: '24/7 Support', desc: 'Round-the-clock customer support for your queries' },
        { icon: '↩️', title: 'Easy Returns', desc: 'Hassle-free return and refund policy' }
    ];

    return (
        <div style={{ backgroundColor: 'var(--bg-gray)' }}>
            <Nav CartCount={0} />

            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '80px 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}
                    >
                        About Softcart Tech Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}
                    >
                        Your trusted destination for quality products and a smooth shopping experience
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ padding: '60px 0' }}>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-dark)' }}>
                                Welcome to Softcart Tech Solutions
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '30px' }}>
                                We started this platform with a simple idea — to provide customers with reliable products,
                                honest pricing, and hassle-free service. We believe shopping should be convenient, transparent,
                                and reliable. That's why we focus on bringing you products that combine quality, value, and comfort.
                            </p>

                            {/* Mission & Vision */}
                            <div className="row mb-5">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 'var(--radius-md)', padding: '30px' }}>
                                        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px' }}>
                                            Our Mission
                                        </h3>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                            To deliver high-quality products with excellent service, making online shopping
                                            easy and enjoyable for every customer.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 'var(--radius-md)', padding: '30px' }}>
                                        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px' }}>
                                            Our Vision
                                        </h3>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                            To become a leading online marketplace known for trust, quality, and customer satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Why Shop With Us */}
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '30px', color: 'var(--text-dark)', textAlign: 'center' }}>
                                Why Shop With Us?
                            </h2>
                            <div className="row g-4 mb-5">
                                {features.map((feature, index) => (
                                    <div className="col-md-4" key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                            className="text-center"
                                            style={{ padding: '20px' }}
                                        >
                                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                                                {feature.icon}
                                            </div>
                                            <h5 style={{ fontWeight: 600, marginBottom: '10px', color: 'var(--text-dark)' }}>
                                                {feature.title}
                                            </h5>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                                {feature.desc}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* Closing */}
                            <div className="text-center" style={{
                                backgroundColor: '#f8f9fa',
                                padding: '40px',
                                borderRadius: 'var(--radius-md)',
                                marginTop: '40px'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px', color: 'var(--text-dark)' }}>
                                    Thank You for Choosing Us!
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                                    We appreciate your trust in us and promise to continue improving every day.
                                </p>
                                <Link
                                    to="/"
                                    className="btn btn-lg"
                                    style={{
                                        backgroundColor: 'var(--primary-color)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '12px 40px',
                                        borderRadius: '50px',
                                        fontWeight: 600
                                    }}
                                >
                                    Start Shopping
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
