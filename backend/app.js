// This is the backend/app.js file for a Node.js application
// It sets up an Express server and loads environment variables from a config file.
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/controllerDatabase');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
connectDatabase();
const products = require('./routes/product');
const order = require('./routes/orderProduct');
app.use('/v1/api', products);
app.use('/v1/api', order);