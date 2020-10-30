var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else{
        var dbase = db.db("Company");
        dbase.createCollection("Employee", (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Collection is created");
                console.log(dbase.databaseName);
            }
        })
    }
	db.close();
})