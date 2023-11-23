const express = require('express');
const router = express.Router();

//Import controllers
const { addLastViewedProduct, getLastViewedProducts } = require('../controllers/lastViewedProducts');

// @route   POST /products
// @desc    Create new product
// @access  Private
router.post('/', addLastViewedProduct);

// @route   GET /products
// @desc    GET existing products
// @access  Public
router.get('/', getLastViewedProducts);

module.exports = router;
