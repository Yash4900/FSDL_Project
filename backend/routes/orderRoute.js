const express = require('express');
const router = express.Router();

const products = require('../database/models/products');
const orders = require('../database/models/orders');
const ordersDetails = require('../database/models/ordersDetails');
const users = require('../database/models/users');
const orders_details = require('../database/models/ordersDetails');

//get all orders
router.get('/', (req, res) => {
    ordersDetails.find({}, {quantity: 0})
        .populate({
            path: '_orderId',
            populate: {
                path: '_userId',
                select: 'username'
            }
        })
        .populate({
            path: '_productId',
            select: 'title description price'
        })
        .then(orders => {
            if (orders.length > 0) {
                res.json(orders);
            } else {
                res.json({message: "No orders found"});
            }
        }).catch(err => res.json(err));  
})

//get single order
router.get('/:orderId', (req, res) => {
    ordersDetails.find({ '_orderId': req.params.orderId })
        .populate({
            path: '_orderId',
            populate: {
                path: '_userId'
            }
        })
        .populate({
            path: '_productId',
            select: 'title description price image'
        })
        .then(orders => {
            if (orders.length > 0) {
                res.json(orders);
            } else {
                res.json({message: "No orders found"});
            }
        }).catch(err => res.json(err));  
})

//place new order
router.post('/new', async(req, res) => {
    let {userId, products} = req.body;
    if (userId !== null && userId > 0) {
        orders.save({
            '_userId': userId
        }).then((newOrderId) => {
            if(newOrderId>0) {
                products.forEach(async (p) => {
                    let data = await products.find({ '_id': p.id}).select('quantity');
                    let inCart = parseInt(p.incart);

                    if (data.quantity > 0) {
                        data.quantity = data.quantity - inCart;

                        if (data.quantity < 0) {
                            data.quantity = 0;
                        }
                    } else {
                        data.quantity = 0;
                    }

                    orders_details.save({
                        order_id: newOrderId,
                        product_id: p.id,
                        quantity: inCart
                    }).then(newId => {
                        products.update({'_id': p.id}, {
                            quantity: data.quantity
                        }).then(successNum => {
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                })
            
            } else {
                res.json({message: 'New order failed while adding order details', success: false});
            }
            res.json({
                message: `Order successfully placed with order id ${newOrderId}`,
                success: true,
                order_id: newOrderId,
                products: products
            })

        }).catch(err => console.log(err))
    }
})

// Payment Gateway
router.post('/payment', (req, res) => {
    setTimeout(() => {
        res.status(200).json({success: true});
    }, 3000)
});

module.exports = router;