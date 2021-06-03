var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/Company';
//database with the name Company will be created

mongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
	if(err) {
        throw err;
    }
    else{
        console.log("Database connected successfully!");
    }
	db.close();
})