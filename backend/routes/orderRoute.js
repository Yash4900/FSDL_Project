const express = require('express');
const router = express.Router();

const orders = require('../database/models/orders');
const products1 = require('../database/models/products')
const orders_details = require('../database/models/ordersDetails');

//place new order
router.post('/new', async(req, res) => {
    let {userId, products} = req.body;
    if (userId != null) {
        var order = new orders({'_userId': userId});
        order.save().then((newOrderId) => {
            if(newOrderId!=null) {
                // decrease product quantity from database that user has bought
                products.forEach(async (p) => {
                    let data = await products1.findOne({ '_id': p.product._id});
                    let inCart = parseInt(p.numInCart);
                    if (data.quantity > 0) {
                        data.quantity = data.quantity - inCart;
                        if (data.quantity < 0) {
                            data.quantity = 0;
                        }
                    } else {
                        data.quantity = 0;
                    }
                    products1.updateOne({'_id': p.product._id}, {
                        quantity: data.quantity
                    }).then().catch(err => console.log(err));
                })
                res.json({
                    message: 'Order successfully placed',
                    success: true,
                    order_id: newOrderId
                })
            
            } else {
                res.json({message: 'New order failed while adding order details', success: false, order_id: undefined, products: undefined});
            }            

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