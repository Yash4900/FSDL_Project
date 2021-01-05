const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../database/models/user.model');

router.post('/register', (req, res) => {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (err) {
            if (err.code == 11000) {
                res.status(422).send('This Email address is already registered');
            } else if (err.name == 'ValidationError') {
                var errors = [];
                Object.keys(err.errors).forEach((key) => errors.push(err.errors[key].message));
                res.status(422).send(errors);
            }
        } else {
            res.send(doc);
        }
    });
});

router.post('/login',(req,res)=>{
    User.findOne({email: req.body.email},(err, doc)=>{
        if(doc==null){
            res.status(401).send('This email is not registered');
        }else{
            if(bcrypt.compareSync(req.body.password, doc.password)){
                console.log("success");
            }else{
                res.status(401).send('Incorrect password');
            }
        }
    });
});

module.exports = router;