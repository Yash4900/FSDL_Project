const prompt = require('prompt-sync')();

var time = prompt('Enter time: ');
var h = parseInt(time.substring(0,2));
var m = parseInt(time.substring(3,5));
var s = parseInt(time.substring(6,8));
var mer = time.substring(8,10);

s = s+45;
if(s>=60) {
    m += 1;
    s -= 60;
}
m += 45;
if(m>=60) {
    if(h==11) {
        if(mer=='AM') {
            mer = 'PM';
        }else {
            mer = 'AM';
        }
    }
    h += 1;
    m-= 60;
    if(h==13) {
        h = 1;
    }
}

console.log(`\nAfter adding 45 min and 45 sec: ${h}:${m}:${s}${mer}`);

if(mer=='AM') {
    if(h==12) {
        h=0;
    }
}else{ // mer=='PM'
    if(h<12) {
        h += 12;
    }
}

console.log(`\n24 - hour format: ${h}:${m}:${s}`);