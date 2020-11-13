var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else{
        var dbase = db.db("electro_shoppe");
        dbase.createCollection("categories", (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Collection is created");
                console.log(dbase.databaseName);
            }
        });
        dbase.createCollection("orders", (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Collection is created");
                console.log(dbase.databaseName);
            }
        });
        dbase.createCollection("orders_details", (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Collection is created");
                console.log(dbase.databaseName);
            }
        });
        dbase.createCollection("products", (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Collection is created");
                console.log(dbase.databaseName);
            }
        });
        dbase.createCollection("users", (err, res) => {
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