const express = require('express');
const router = express.Router();
const {
    authUser,
    registerUser,
    getUserProfile,
    socialLogin,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/social-login', socialLogin);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
