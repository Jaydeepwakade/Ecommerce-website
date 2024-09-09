const express = require('express');
const ProductModel = require('../../models/Products/Products.model'); // Ensure correct import
const CrudRouter = express.Router();

// Fetch all products
CrudRouter.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Failed to fetch products", error: error.message });
    }
});

module.exports = CrudRouter;
