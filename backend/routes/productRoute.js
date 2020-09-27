const express = require('express');
const router = express.Router();

const products = require('../database/models/products');
const categories = require('../database/models/categories');

//get all products
router.get('/', (req, res) => { 
    var page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    var limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;
    var startValue;
    var endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;             
        endValue = page * limit;                  
    } else {
        startValue = 0;
        endValue = 10;
    }
    products.find({})
        .then((prods) => {
            res.send(prods);
        })
        .catch((err) => {
            res.send("Error retrieving data!");
        })
})

module.exports = router;



