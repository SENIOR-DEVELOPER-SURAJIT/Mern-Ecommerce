const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    details: {
        product: String,
        warranty: String,
        merchant: String,
    },
    image: {
        type: String,
        required: true,
    },
    images: [String],
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
