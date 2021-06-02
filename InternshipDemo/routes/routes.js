const e = require('express');
const mongoose = require('mongoose');
const express = require('express');
const User = require('../database/userModel');
const Task = require('../database/taskModel');
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
    Task.find({email: req.user.email}).then(taskList => {
        res.render('dashboard', {email: req.user.email, tasks: taskList});
    }).catch(err => console.log(err));
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

// Register
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

// Login
router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    })(req, res, next);
});

// Add a new task
router.post('/dashboard', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const desc = req.body.desc;
    const task = new Task({email: email, name: name, desc: desc});
    task.save().then(task => {
        res.redirect('/dashboard');
    }).catch(err => console.log(err));
});

// Delete a task
router.get('/delete/:taskId', function(req, res) {
    const id = mongoose.Types.ObjectId(req.params.taskId);
    Task.findByIdAndDelete({_id: id}).then(task => {
        res.redirect('/dashboard');
    }).catch(err => console.log(err));
});

module.exports = router;