const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
	name: {
		type: String
	},
	position: {
		type: String
	},
	phone: {
		type: String,
		maxlength: 10,
		minlength: 10
	},
	salary: {
		type: Number,
	},
});

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;