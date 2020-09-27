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
	role: {
		type: Number
	},
	photoUrl: {
		type: String
	},
	type: {
		type: String
	}
});

const users = mongoose.model('users', UserSchema);

module.exports = users;