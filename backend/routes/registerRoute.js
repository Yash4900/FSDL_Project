const express = require('express');
const router = express.Router();

const users = require('../database/models/users');
const address = require('../database/models/address');


router.post('/', (req, res) => {
    var user = new users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age
    });
    user.save().then(uid => {
        var add = new address({
            line1: req.body.line1,
            line2: req.body.line2,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            phone:req.body.phone,
            pincode:req.body.pin,
            _userId: uid
        });
        add.save().then(console.log('saved')).catch(err => console.log(err));
        res.status(200).json({
            message: "You are registered successfully"
        })
    }).catch(err => console.log(err));
});

module.exports = router;