const express = require('express');
const router = express.Router();

const products = require('../database/models/products');
const categories = require('../database/models/categories');

//get all products
router.get('/', (req, res) => { 
    products.find({}, 'title price quantity description image') // we want only title price quantity ...
        .populate("_catId", 'title') //populate is equivalent to join in mysql
        .then(prods => {
            if (prods.length > 0) {
                res.status(200).json({
                    count: prods.length,
                    products: prods
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
    products.find({ "_id": productId}, 'title price quantity description image')
        .populate("_catId", 'title')
        .then(prod => {
            if (prod.length > 0) {
                res.status(200).json(prod[0]);
            } else {
                res.json({message: "No products found"});
            }
        })
        .catch(err => console.log(err));
})

//get all products of a particular category
router.get('/category/:catName', (req, res) => { 
    let cat = req.params.catName;
    products.find({}, 'title price quantity description image')
        // we use regular expression to find category 
        .populate('_catId', null, {title: {$regex: `${cat}`, $options: 'i' } })
        .then((prods) => {
            prods = prods.filter(function(prod){
                return prod._catId;
            })
            if (prods.length > 0) {
                res.status(200).json({
                    count: prods.length,
                    products: prods
                });
            } else {
                res.json({message: "No products found"});
            }
        })
        .catch(err => console.log(err));
})

module.exports = router;