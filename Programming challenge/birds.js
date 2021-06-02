const prompt = require('prompt-sync')();

var spotting = [];
var n = prompt('Enter number of spottings : ');

// Taking ids of birds spotted
console.log('Enter ids of birds\n');
var maxId = 0;
for(var i=0;i<n;i++) {
    spotting[i] = prompt();
    if(spotting[i] > maxId) {
        maxId = spotting[i];
    }
}

// Initialize count array
var count = [];
for(var i=0;i<=maxId;i++) {
    count[i] = 0;
}

// Finding minimum and maximum bird count
var min = 100;
var max = 0;
for(var i=0;i<n;i++) {
    count[spotting[i]] = count[spotting[i]] + 1;
    if(count[spotting[i]]>max) {
        max = count[spotting[i]];
    }
    if(count[spotting[i]]<min) {
        min = count[spotting[i]];
    }
}

// Calculate ans
var minBirdID;
var maxBirdID;
for(var i=0;i<=maxId; i++) {
    if(minBirdID==null && count[i]==min) {
        minBirdID = i;
    }
    if(maxBirdID==null && count[i]==max) {
        maxBirdID = i;
    }
}

// Print Output
console.log(`[${maxBirdID} - ${minBirdID}]`);
