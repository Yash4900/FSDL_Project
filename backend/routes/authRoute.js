const express = require('express');
const router = express.Router();

const users = require('../database/models/users');
const address = require('../database/models/address');

// create user account / register
router.post('/register', (req, res) => {
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

// check whether the user is register user
router.post('/verify', (req, res) => {
    let uname = req.body.username;
    let passwd = req.body.password;
    users.find({'username':uname, 'password':passwd}).then(result => {
        if(result.length>0){
            res.json({
                uid: result[0]._id,
                success: true
            });
        }else{
            res.json({
                uid: undefined,
                success:false
            })
        }
    })
});

module.exports = router;