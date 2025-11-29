import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <Nav />
            <div className="container py-5 flex-grow-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="card border-0 shadow-lg p-5"
                    style={{ borderRadius: '20px' }}
                >
                    <h1 className="fw-bold text-primary mb-4 text-center">Terms and Conditions</h1>
                    <p className="text-muted text-center mb-5">Last updated: November 2025</p>

                    <div className="row g-4">
                        <div className="col-12">
                            <h4 className="fw-bold">1. Introduction</h4>
                            <p className="text-secondary">
                                Welcome to Softcart Tech Solutions. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">2. Use of Service</h4>
                            <p className="text-secondary">
                                You must be at least 18 years old to use our services. You agree not to use our platform for any illegal or unauthorized purpose.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">3. Products and Pricing</h4>
                            <p className="text-secondary">
                                We strive to display accurate product information and pricing. However, errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">4. User Accounts</h4>
                            <p className="text-secondary">
                                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">5. Limitation of Liability</h4>
                            <p className="text-secondary">
                                Softcart Tech Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
