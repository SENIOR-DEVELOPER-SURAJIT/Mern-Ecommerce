const Product = require('../models/Product');

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

        const products = [
            {
                id: 1,
                name: 'Sony WX-5',
                price: 100.75,
                category: 'Headphones',
                rating: 3,
                color: 'red',
                size: '',
                details: {
                    product: "",
                    warranty: "",
                    merchant: ""
                },
                image: 'product-1-square',
                images: ['product-1-square', 'product-1-square', 'product-1-square']
            },
            {
                id: 2,
                name: 'Apple Watch 2',
                price: 500.75,
                category: 'Smartwatch',
                rating: 4,
                color: 'black',
                size: '',
                details: {
                    product: "",
                    warranty: "",
                    merchant: ""
                },
                image: 'product-2-square',
                images: ['product-2-square', 'product-2-square', 'product-2-square']
            },
            {
                id: 3,
                name: 'Apple iPhone 11',
                price: 799.75,
                category: 'Mobile',
                rating: 4,
                color: 'red',
                size: '',
                details: {
                    product: "",
                    warranty: "",
                    merchant: ""
                },
                image: 'product-3-square',
                images: ['product-3-square', 'product-3-square', 'product-3-square']
            }
        ];

        await Product.insertMany(products);
        res.json({ message: 'Products seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = {
    getProducts,
    seedProducts,
};
