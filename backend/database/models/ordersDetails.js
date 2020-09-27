const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	_orderId: {
		type: mongoose.Types.ObjectId
	},
	_productId: {
		type: mongoose.Types.ObjectId
	},
	quantity: {
		type: int
	}
});

const orders_details = mongoose.model('orders_details', OrderSchema);

module.exports = orders_details;