var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, (err, db) => {
	if (err) {
        throw err;
    } else {
        var dbase = db.db("Company");

        dbase.collection("Employee").find({}).toArray((err, result) => {
            if (err) {
                throw err;
            } else {
                console.log(result);
            }
            db.close();
        })
    }
})