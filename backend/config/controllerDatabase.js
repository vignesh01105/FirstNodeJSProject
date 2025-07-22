// backend/config/controllerDatabase.js
// This file contains the logic to connect to the MongoDB database using Mongoose.
const mongoose = require ('mongoose');

const connectDatabase = () => {
    // Placeholder for database connection logic
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log("Connected to Mongo DB Successfully: " + con.connection.host);
    });
};

module.exports = connectDatabase;