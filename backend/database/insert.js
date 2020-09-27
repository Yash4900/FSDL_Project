var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbase = db.db("ElectroShoppe");

    var ObjMobile = [
        { name: "iPhone 11", company: "Apple", price: 68300 },
        { name: "Galaxy S10", company: "Samsung", price: 49999 },
        { name: "7T", company: "OnePlus", price: 43999 },
        { name: "Note 9 Pro Max", company: "Redmi", price: 16999 }]

    dbase.collection("Mobiles").insertMany(ObjMobile, function (err, res) {
        if (err) throw err;
        console.log(`${ObjMobile.length} mobile records inserted !\n`);
        db.close();
    });


    var ObjLaptop = [
        { name: "MacBook Pro", company: "Apple", price: 195602 },
        { name: "TUF Gaming A15", company: "ASUS", price: 67990 },
        { name: "Ideapad Slim 3", company: "Lenovo", price: 31980 },
        { name: "Notebook 250 G7", company: "HP", price: 29999 }]

    dbase.collection("Laptops").insertMany(ObjLaptop, function (err, res) {
        if (err) throw err;
        console.log(`${ObjLaptop.length} laptop records inserted !\n`);
        db.close();
    });


    var ObjTV = [
        { name: "Bravia OLED", company: "Sony", price: 327190 },
        { name: "4K UHD Smart Nano-Cell", company: "LG", price: 309990 },
        { name: "Q Series QA65Q7FNAK", company: "Samsung", price: 219899 },
        { name: "Smart LED TV TH-58HX450DX ", company: "Panasonic", price: 49999 }]

    dbase.collection("TV").insertMany(ObjTV, function (err, res) {
        if (err) throw err;
        console.log(`${ObjTV.length} TV records inserted !\n`);
        db.close();
    });
});