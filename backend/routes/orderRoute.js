const express = require('express');
const router = express.Router();

const products = require('../database/models/products');
const orders = require('../database/models/orders');
const ordersDetails = require('../database/models/ordersDetails');
const users = require('../database/models/users');

//get all orders
router.get('/', (req, res) => {
    ordersDetails.find({})
        .populate({
            path: '_orderId',
            populate: {
                path: '_userId'
            }
        })
        .populate('_productId')
        .then(orders => {
            if (orders.length > 0) {
                res.json(orders);
            } else {
                res.json({message: "No orders found"});
            }
        }).catch(err => res.json(err));  
})

module.exports = router;