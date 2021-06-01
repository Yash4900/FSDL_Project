const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../database/userModel');

module.exports = function(passport) {
    passport.use(
        new localStrategy({usernameField: 'email'}, (email, password, done) => {
            // Check User
            User.findOne({ email:email })
            .then(user => {
                if(!user) {
                    return done(null ,false, {msg: 'You are not registered'});
                }else{
                    bcrypt.compare(password, user.password, (err, match) => {
                        if (err) throw err;
                        if(match) {
                            return done(null, user);
                        }else{
                            return done(null, false, {msg: 'Password incorrect'});
                        }
                    })
                }
            })
            .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}