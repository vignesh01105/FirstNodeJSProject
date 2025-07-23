const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    name: String,
    details: String,
    status: String,
});
const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;