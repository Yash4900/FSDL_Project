const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
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
	},
	_userId: {
		type: mongoose.Types.ObjectId
	}
});

const address = mongoose.model('address', AddressSchema);

module.exports = address;