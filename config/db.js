require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection
    mongoose.connect(process.env.mongoDB_Connection_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected successfully');
    }).catch(err => {
        console.log('Connection failed: ', err);
    });
}



module.exports = connectDB;