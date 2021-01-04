const mongoose = require('mongoose');

var Employee = require('./models/employeeSchema');

mongoose.connect('mongodb://127.0.0.1:27017/department', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Database connected successfully!!"))
	.catch((error) => console.log(error));

// var emp = new Employee({
// 	name: 'Yash',
// 	position: 'Manager',
// 	phone: 8845268327,
// 	salary: 65000
// });

// Employee.create(emp, (err) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Data inserted successfully");
// 	}
// });

Employee.find({}, (err, res) => {
	if(err){
		console.log(err);
 	}else{
 		console.log(res);
 	}
});