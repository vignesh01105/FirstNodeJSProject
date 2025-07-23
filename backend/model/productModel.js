const mongoose = require('mongoose');
 const productSchema = new mongoose.Schema({
    name: String,
    details: String,
    reviews: String,
    
 });

 const productModal = mongoose.model('Product', productSchema);
 module.exports = productModal;