import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Mission = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <Nav />
            <div className="container py-5 flex-grow-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card border-0 shadow-lg overflow-hidden"
                    style={{ borderRadius: '20px' }}
                >
                    <div className="row g-0">
                        <div className="col-md-6 bg-primary text-white p-5 d-flex flex-column justify-content-center">
                            <h1 className="fw-bold mb-4">Our Mission</h1>
                            <p className="lead">
                                To revolutionize the e-commerce experience by providing high-quality products with exceptional service, fostering a community of trust and innovation.
                            </p>
                        </div>
                        <div className="col-md-6 p-5 bg-white d-flex flex-column justify-content-center">
                            <h3 className="fw-bold text-dark mb-4">Core Values</h3>
                            <ul className="list-unstyled">
                                <li className="mb-3 d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                                    <span className="fs-5 text-secondary">Customer Obsession</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                                    <span className="fs-5 text-secondary">Innovation & Quality</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                                    <span className="fs-5 text-secondary">Integrity & Trust</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="bi bi-check-circle-fill text-success me-3 fs-4"></i>
                                    <span className="fs-5 text-secondary">Sustainability</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-5 bg-light">
                        <h3 className="fw-bold text-center mb-4">Our Story</h3>
                        <p className="text-secondary text-center mx-auto" style={{ maxWidth: '800px' }}>
                            Founded in 2024, Softcart Tech Solutions began with a simple idea: to make technology accessible to everyone. We started as a small team of passionate tech enthusiasts and have grown into a leading e-commerce platform. We believe in the power of technology to improve lives and are committed to bringing the best products to our customers.
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Mission;
