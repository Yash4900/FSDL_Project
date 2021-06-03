const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	fname: {
		type: String
	},
	lname: {
		type: String
	},
	age: {
		type: Number
	},
	line1: {
		type: String
	},
	line2: {
		type: String
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	country: {
		type: String
	},
	phone: {
		type: String,
	},
	pincode: {
		type: String,
	}
});

const users = mongoose.model('users', UserSchema);

module.exports = users;