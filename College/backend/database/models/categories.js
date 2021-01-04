const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
	title: {
		type: String
	}
});

const categories = mongoose.model('categories', CategorySchema);

module.exports = categories;