var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else{
        var dbase = db.db("Company");
        var objects = [
            {
                name: "Siddharth",
                age: 20,
                salary: 25500 
            },
            {
                name: "Nishant",
                age: 20,
                salary: 26000
            }
        ];
        dbase.collection("Employee").insertMany(objects, (err, res) => {
            if (err) {
                throw err;
            } else {
                console.log("Data inserted successfully");
            }
        })
    }
	db.close();
})