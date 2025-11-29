import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
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
                    <h1 className="fw-bold text-primary mb-4 text-center">Privacy Policy</h1>
                    <p className="text-muted text-center mb-5">Your privacy is important to us.</p>

                    <div className="row g-4">
                        <div className="col-12">
                            <h4 className="fw-bold">1. Information We Collect</h4>
                            <p className="text-secondary">
                                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, and payment information.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">2. How We Use Your Information</h4>
                            <p className="text-secondary">
                                We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your account and our products.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">3. Information Sharing</h4>
                            <p className="text-secondary">
                                We do not sell or rent your personal information to third parties. We may share your information with service providers who perform services on our behalf, such as payment processing and shipping.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">4. Data Security</h4>
                            <p className="text-secondary">
                                We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                            </p>
                        </div>

                        <div className="col-12">
                            <h4 className="fw-bold">5. Your Rights</h4>
                            <p className="text-secondary">
                                You have the right to access, correct, or delete your personal information. You may also opt out of receiving promotional communications from us.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
