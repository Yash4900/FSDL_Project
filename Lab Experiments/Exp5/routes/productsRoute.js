const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

const product = require('../database/model/product');

router.get('/', (req, res) => {
    res.render('pages/addOrEdit', {
        viewTitle: "Insert Product"
    });
});

router.post('/', (req, res) => {
    if(req.body._id==''){
        var prod = new product({
            title: req.body.title,
            image: req.body.image,
            images: req.body.images,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            short_desc: req.body.short_description,
            _catId: mongoose.Types.ObjectId(req.body.category)
        });
    
        prod.save((err, docs) => {
            if(err) {
                console.log(err);
            }else{
                res.redirect('products/list');
            }
        });
    }else{
        product.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
            if(err) {
                console.log(err);
            }else{
                res.redirect('products/list');
            }
        })
    }
    
});

router.get('/list', (req, res) => {
    product.find((err, docs) => {
        if(err) {
            console.log(err);
        }else{
            res.render('pages/list', {
                list: docs
            });
        }
    }).lean();
});

router.get('/:Id', (req, res) => {
    product.findById(req.params.Id, (err, prod) => {
        if(err){
            console.log(err);
        }else{
            res.render('pages/addOrEdit', {
                title: 'Update Product',
                product: prod
            });
        }
    }).lean();
});

router.get('/delete/:Id', (req, res) => {
    product.findByIdAndRemove(req.params.Id, (err, doc) => {
        if(err) {
            console.log(err);
        }else{
            res.redirect('/products/list');
        }
    });
});

module.exports = router;