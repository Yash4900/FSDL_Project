const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name cannot be empty'
    },
    email: {
        type: String,
        required: 'Email cannot be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password cannot be empty'
    },
    saltSecret: {
        type: String
    }
});

// encode the password
userSchema.pre('save', (next) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

module.exports = mongoose.model('User', userSchema);