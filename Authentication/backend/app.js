require('./config/config');
require('./database/dbcon')

// import installed packages
const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/user_route');

var app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Backend running on port ${process.env.PORT}`);
});