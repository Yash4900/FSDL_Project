const readline = require('readline');

var r = readline.createInterface(process.stdin, process.stdout);

r.question("Which Electronic item you want to buy? ", function(item){
	console.log(`${item} is available`);
	
	r.question("In which brand are you interested? ", function(brand){
	console.log(`${brand} is a very nice brand!`);
		r.close();
	})
});

