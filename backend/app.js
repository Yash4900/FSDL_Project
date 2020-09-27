const express = require('express');
const app = express();

//datasbase connection
const mongoose = require('./database/dbcon');

//import router
const productRoute = require('./routes/productRoute');

//use route
app.use('/products', productRoute);

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//this will allow our application to use json data
app.use(express.json())

app.listen(3000, () => console.log("Server running on port 3000"));
