const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	_orderId: {
		type: mongoose.Types.ObjectId,
		ref: 'orders'
	},
	_productId: {
		type: mongoose.Types.ObjectId,
		ref: 'products'
	},
	quantity: {
		type: Number
	}
});

const orders_details = mongoose.model('orders_details', OrderSchema);

module.exports = orders_details;