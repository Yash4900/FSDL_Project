const events = require('events');
const eventEmitter = new events.EventEmitter();
const readline = require('readline');

var r = readline.createInterface(process.stdin, process.stdout);
var pin;

var accounts = {
	1234 : 35000,
	3421 : 45000,
	4132 : 50000
}

var displayBal = function(p){
	
	var bal = accounts[p];
	if(bal==undefined){
		console.log("Invalid pin");
		eventEmitter.emit('Start');
	}else{
		console.log("\n\nYour total balance = Rs. "+bal);
		r.question("\nChoose one option: 1. Withdraw 2. Deposit 3. Exit", function(res){
			if(res==1){
				r.question("Enter amount: ", function(amt){
					eventEmitter.emit('Withdraw', pin, amt);
				});
			}else if(res==2){
				r.question("Enter amount: ", function(amt){
					eventEmitter.emit('Deposit', pin, amt);
				});
			}else{
				eventEmitter.emit('Start');
			}
		});
	}
}
eventEmitter.addListener('db', displayBal);

var deposit = function(pin, amount){
	accounts[pin] = accounts[pin] + parseInt(amount);  
	eventEmitter.emit('db', pin);
}
eventEmitter.addListener('Deposit', deposit);


var withdraw = function(pin, amount){
	if(amount>accounts[pin]){
		console.log("Insufficient Balance!!");
	}else{
		accounts[pin] -= amount;
	}  
	eventEmitter.emit('db', pin);
}
eventEmitter.addListener('Withdraw', withdraw);

var start = function(){
r.question("Press 1 to login else 2: ", function(res){
	var response = res;
	if(response==1){
		r.question("Enter your pin number: ", function(item){
			pin = item;
			eventEmitter.emit('db', pin);
		});
	}else{
		r.close();
	}
});
}
eventEmitter.addListener('Start', start);

eventEmitter.emit('Start');