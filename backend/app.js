const express = require('express');
const app = express();
const cors = require('cors');

//datasbase connection
const mongoose = require('./database/dbcon');

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//import routes
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');

//use routes
app.use('/products', productRoute);
app.use('/orders', orderRoute);

//this will allow our application to use json data
app.use(express.json());

app.listen(3000, () => console.log("Server running on port 3000"));
