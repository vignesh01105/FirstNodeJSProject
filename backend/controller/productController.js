// This is the backend/controller/productController.js file
// It contains the controller functions for handling product-related requests.
// It exports functions to get all products and a product by its ID.
const productModel = require('../model/productModel');

exports.getProducts = async (req, res, next) => {
   try {
      // Fetch all products from the database
      // and return a success message with the products data.
       const products = await productModel.find();
       res.json({
           success: true,
           message: 'Products fetched successfully',
           data: products
       });
   } catch (error) {
       next(error);
   }
}
// This function fetches a product by its ID
// It uses the request parameter to get the product ID and returns a success message.
exports.getProductById = async(req, res, next) => {
   // Fetch product by ID from the database
   // and return a success message with the product data.
   const productId = req.params.id;
   try {
       const product = await productModel.findById(productId);
       if (!product) {
           return res.status(404).json({
               success: false,
               message: `Product with ID ${productId} not found`,
           });
       }
       res.json({
           success: true,
           message: `Product with ID ${productId} fetched successfully`,
           data: product
       });
   } catch (error) {
      res.json({
           success: false,
           message: 'Error fetching product using ID',
       });
       
   }
}