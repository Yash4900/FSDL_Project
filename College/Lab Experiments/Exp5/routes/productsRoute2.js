const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

const product = require('../database/model/product');

router.post('/post', (req, res) => {

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
            res.json(docs);
        }
    });
    
});

router.get('/list/get', (req, res) => {
    product.find((err, docs) => {
        if(err) {
            console.log(err);
        }else{
            res.json(docs);
        }
    }).lean();
});

router.patch('/patch', (req, res) => {
    product.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(err) {
            console.log(err);
        }else{
            res.json(doc);
        }
    })
});

router.delete('/deleteProd/:Id', (req, res) => {
    product.findByIdAndRemove(req.params.Id, (err, doc) => {
        if(err) {
            console.log(err);
        }else{
            res.json(doc);
        }
    });
});

module.exports = router;