const mongoose = require('mongoose');

mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){ 
        console.log("MongoDB connection unsuccessful");
    }else{ 
        console.log("MongoDB connection successful");
    } 
});