import React from 'react';
import { motion } from 'framer-motion';

const WhyShopWithUs = () => {
    const features = [
        {
            icon: '🚚',
            title: 'Fast Delivery',
            description: 'Get your products delivered quickly to your doorstep with our express shipping service.'
        },
        {
            icon: '📦',
            title: 'Free Shipping',
            description: 'Enjoy free shipping on all orders above $50. No hidden charges, just pure savings.'
        },
        {
            icon: '⭐',
            title: 'Best Quality',
            description: 'We ensure top-notch quality for all our products with 100% satisfaction guarantee.'
        }
    ];

    return (
        <div className="section" style={{ backgroundColor: 'var(--bg-light)', padding: '60px 0' }}>
            <div className="container">
                <h2 className="section-title">Why Shop With Us</h2>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div className="col-md-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-4"
                            >
                                <div
                                    className="mb-3 d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: '#fff5f5',
                                        fontSize: '2.5rem'
                                    }}
                                >
                                    {feature.icon}
                                </div>
                                <h5 className="fw-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                                    {feature.title}
                                </h5>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyShopWithUs;
