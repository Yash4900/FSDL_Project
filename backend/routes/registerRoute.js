const express = require('express');
const router = express.Router();

const users = require('../database/models/users');

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
        res.status(200).json({
            uid: uid,
            message: "User registered successfully"
        })
    }).catch(err => console.log(err));
});

module.exports = router;