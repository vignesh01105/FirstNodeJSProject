const express = require('express');
const router = express.Router();

const { createOrder } = require('../controller/orderProductController');
router.route('/order').post(createOrder);
module.exports = router;
// This file defines the route for creating an order using the createOrder controller function.