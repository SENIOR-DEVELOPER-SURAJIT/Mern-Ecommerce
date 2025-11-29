import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    const { userInfo } = useSelector((state) => state.auth);

    if (!userInfo) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <Nav />
            <div className="container py-5 flex-grow-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="row justify-content-center"
                >
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
                            <div className="bg-primary p-5 text-center position-relative">
                                <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                                    background: 'linear-gradient(45deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)'
                                }}></div>

                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="position-relative"
                                >
                                    {userInfo.avatar ? (
                                        <img
                                            src={userInfo.avatar}
                                            alt={userInfo.name}
                                            className="rounded-circle border border-4 border-white shadow"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div
                                            className="rounded-circle border border-4 border-white shadow d-flex align-items-center justify-content-center mx-auto bg-white text-primary"
                                            style={{ width: '150px', height: '150px', fontSize: '4rem', fontWeight: 'bold' }}
                                        >
                                            {userInfo.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </motion.div>

                                <h2 className="text-white mt-4 fw-bold position-relative">{userInfo.name}</h2>
                                <p className="text-white-50 mb-0 position-relative">{userInfo.email}</p>
                            </div>

                            <div className="card-body p-5">
                                <h4 className="fw-bold mb-4 text-secondary">Profile Details</h4>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded-3 h-100">
                                            <label className="text-muted small fw-bold text-uppercase mb-1">Full Name</label>
                                            <p className="mb-0 fw-medium fs-5">{userInfo.name}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded-3 h-100">
                                            <label className="text-muted small fw-bold text-uppercase mb-1">Email Address</label>
                                            <p className="mb-0 fw-medium fs-5">{userInfo.email}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded-3 h-100">
                                            <label className="text-muted small fw-bold text-uppercase mb-1">Phone Number</label>
                                            <p className="mb-0 fw-medium fs-5">{userInfo.phone || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded-3 h-100">
                                            <label className="text-muted small fw-bold text-uppercase mb-1">Account Type</label>
                                            <div className="d-flex align-items-center">
                                                <span className={`badge ${userInfo.isAdmin ? 'bg-danger' : 'bg-success'} rounded-pill px-3 py-2`}>
                                                    {userInfo.isAdmin ? 'Admin' : 'Customer'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded-3 h-100">
                                            <label className="text-muted small fw-bold text-uppercase mb-1">Member Since</label>
                                            <p className="mb-0 fw-medium fs-5">
                                                {new Date(userInfo.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 text-center">
                                    <button className="btn btn-outline-primary px-4 py-2 rounded-pill me-3">
                                        <i className="bi bi-pencil me-2"></i> Edit Profile
                                    </button>
                                    <button className="btn btn-outline-danger px-4 py-2 rounded-pill">
                                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
