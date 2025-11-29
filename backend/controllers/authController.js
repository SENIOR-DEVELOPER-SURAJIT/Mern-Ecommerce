const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/User');

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
        phone,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Social Login (Google/Phone)
// @route   POST /api/auth/social-login
// @access  Public
const socialLogin = asyncHandler(async (req, res) => {
    const { email, name, googleId, avatar, phone, uid } = req.body;

    let user;

    if (email) {
        // Google Login
        user = await User.findOne({ email });
    } else if (phone) {
        // Phone Login
        user = await User.findOne({ phone });
    }

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        // Create new user
        const newUser = await User.create({
            name: name || (phone ? `User ${phone.slice(-4)}` : 'User'),
            email: email || (phone ? `${phone}@mobile.com` : `user${uid}@example.com`), // Placeholder email for phone users
            password: googleId || uid, // Use UID as password for social login
            phone: phone || '',
            isAdmin: false,
        });

        if (newUser) {
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: generateToken(newUser._id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    }
});

module.exports = { authUser, registerUser, getUserProfile, socialLogin };
