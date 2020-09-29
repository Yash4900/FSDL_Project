const express = require('express');
const router = express.Router();

const products = require('../database/models/products');
const categories = require('../database/models/categories');

//get all products
router.get('/', (req, res) => { 
    var page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    var limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;             
        endValue = page * limit;                  
    } else {
        startValue = 0;
        endValue = 10;
    }
    products.find({})
        .populate("_catId") //join products and category
        .then(prods => {
            if (prods.length > 0) {
                res.status(200).json({
                    count: prods.length,
                    products: prods.slice(startValue,endValue)
                });
            } else {
                res.json({message: "No products found"});
            }
        })
        .catch(err => console.log(err));
})

//get one product
router.get('/:prodId', (req, res) => {
    var productId = req.params.prodId;
    products.find({ "_id": productId})
        .populate("_catId") //join products and category
        .then(prod => {
            if (prod.length > 0) {
                res.status(200).json(prod);
            } else {
                res.json({message: "No products found"});
            }
        })
        .catch(err => console.log(err));
})


module.exports = router;



