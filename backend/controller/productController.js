// This is the backend/controller/productController.js file
// It contains the controller functions for handling product-related requests.
// It exports functions to get all products and a product by its ID.
exports.getProducts = (req, res,next) => {
   res.json({success: true,
    message: 'Products fetched successfully',
   });  
}
// This function fetches a product by its ID
// It uses the request parameter to get the product ID and returns a success message.
exports.getProductById = (req, res, next) => {
   const productId = req.params.id;
   res.json({
     success: true,
     message: `Product with ID ${productId} fetched successfully`,
   });
}