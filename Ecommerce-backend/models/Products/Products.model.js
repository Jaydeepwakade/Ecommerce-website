const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    frameType: { type: String, required: true },
    lensType: { type: String, required: true },
    size: { type: String, required: true },
    material: { type: String, required: true },
    shape: { type: String, required: true },
    color: { type: String, required: true },
    gender: { type: String, enum: ["men", "women", "unisex"], required: true },
    rating: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    brand: { type: String, required: true },
    polarized: { type: Boolean, default: false },
    uvProtection: { type: Boolean, default: false },
});

// Create and export the model
const ProductModel = mongoose.model('Product', ProductsSchema);
module.exports = ProductModel;
