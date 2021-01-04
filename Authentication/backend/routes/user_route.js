const express = require('express');
const router = express.Router();

const User = require('../database/models/user.model');

router.post('/register', (req, res, next)=>{
    var user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });
    user.save((err, doc) => {
        if(err){
            if(err.code==11000){
                res.status(422).send(['This Email address is already registered']);
            }else if(err.name=='ValidationError'){
                var errors = [];
                Object.keys(err.errors).forEach((key)=> errors.push(err.errors[key].message));
                res.status(422).send(errors);
            }
        }else{
            res.send(doc);
        }
    });
});

module.exports = router;