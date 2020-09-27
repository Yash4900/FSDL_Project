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
		type: int
	},
	quantity: {
		type: int
	},
	short_desc: {
		type: String
	},
	_catId: {
		type: mongoose.Types.ObjectId
	}
});

const products = mongoose.model('products', ProductSchema);

module.exports = products;