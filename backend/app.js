const express = require('express');
const app = express();
const cors = require('cors');

//datasbase connection
const mongoose = require('./database/dbcon');

//CORS
app.use(cors());

//this will allow our application to use json data
app.use(express.json());

//import routes
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');
const authRoute = require('./routes/authRoute')

//use routes
app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.use('/auth', authRoute);

app.listen(3000, () => console.log("Server running on port 3000"));
