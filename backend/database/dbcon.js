const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/mobile_store', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Database connected successfully!!"))
	.catch((error) => console.log(error));

module.exports = mongoose;