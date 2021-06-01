const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DBASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Database connected successfully!!"))
	.catch((error) => console.log(error));

module.exports = mongoose;