var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else{
        var dbase = db.db("Company");
        var obj = {
            name: "Yash",
            age: 20,
            salary: 25000 
        }
        dbase.collection("Employee").insertOne(obj, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Data inserted successfully");
            }
        })
    }
	db.close();
})