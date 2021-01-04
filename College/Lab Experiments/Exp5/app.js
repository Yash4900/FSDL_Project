const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
 
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');
 
//database connection
const mongoose = require('./database/dbcon');
 
app.listen(3000, () => console.log("Server running on port 3000"));
 
//import route
const productsRoute = require('./routes/productsRoute');
const productsRoute2 = require('./routes/productsRoute2');

 
//use route
app.use('/products', productsRoute);
app.use('/products2', productsRoute2);
