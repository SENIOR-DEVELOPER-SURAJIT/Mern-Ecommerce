const Product = require('../models/Product');
const productsData = require('../data/products');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Seed products
// @route   POST /api/products/seed
// @access  Public (for dev/demo purposes)
const seedProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        await Product.insertMany(productsData);
        res.json({ message: `${productsData.length} products seeded successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    getProducts,
    seedProducts,
};
