const orderModel = require('../model/orderModel');

exports.createOrder = async (req, resp, next) => {
    try {
        const newOrder = new orderModel(req.body);
        await newOrder.save();
        resp.json({
            success: true,
            message: 'Order created successfully',
            data: newOrder
        });
    } catch (error) {
        next(error);
    }
};      
   