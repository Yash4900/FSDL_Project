const math = require('./mathFuncs/math.js');
const readline = require('readline');
var r = readline.createInterface(process.stdin, process.stdout);
r.question("Enter a number for calculating its factorial: ", (num) => {
	math.factorial(num);
	
	r.question("Enter number and power of number: ", (num) => {
	var res = num.split(" ");
	math.power(parseInt(res[0]), parseInt(res[1]));
	r.close()	
})	
})

