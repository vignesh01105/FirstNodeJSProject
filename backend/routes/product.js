const express = require('express');
const router = express.Router();

const getProducts = require('../controller/productController').getProducts;
const getProductById = require('../controller/productController').getProductById;

// Define your product routes here

router.route('/products').get(getProducts);
router.route('/products/:id').get(getProductById);

module.exports = router;