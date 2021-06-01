const e = require('express');
const express = require('express');
const User = require('../database/userModel');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { isAuthenticated } = require('../config/auth');

require('../database/userModel');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', {email: req.user.email});
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

router.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}).then(user => {
        if(user) {
            res.render('register', {error: 'User is already registered'});
        }else {
            const user = new User({
                email: email,
                password: password
            });
            // Hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    user.save().then(user => {
                        res.redirect('/');
                    }).catch(err => console.log(err));
                });
            });
        }
    }).catch(err => console.log(err));
    
});

router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    })(req, res, next);
})

module.exports = router;