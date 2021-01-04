const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	title: {
		type: String
	},
	image: {
		type: String
	},
	images: {
		type: String
	},
	description: {
		type: String
	},
	price: {
		type: Number
	},
	quantity: {
		type: Number
	},
	short_desc: {
		type: String
	},
	_catId: {
		type: mongoose.Types.ObjectId,
		ref: "categories"
	}
});

const products = mongoose.model('products', ProductSchema);

module.exports = products;