exports.factorial = function(num){
	var fact = 1;
	var temp = num;
	while(temp>0){
		fact = fact * temp;
		temp--;
	}
	console.log(`\nFactorial of ${num} is ${fact}`);
}

exports.power = function(a, b){
	var x = a;
	var y = b;
	while(y>1){
		x = x * a;
		y--;
	}
	console.log(`\n${a} raised to ${b} is ${x}`);
}