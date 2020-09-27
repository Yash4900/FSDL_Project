const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	_userId: {
		type: mongoose.Types.ObjectId
	}
});

const orders = mongoose.model('orders', OrderSchema);

module.exports = orders;