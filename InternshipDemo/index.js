// Imports
const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const expressSession = require('express-session');
const routes = require('./routes/routes');
const passport = require('passport');

const app = express();

// Env file
require('dotenv').config()

// Passport config
require('./config/passport')(passport);

// Datasbase connection
require('./database/dbcon');

// Use EJS
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

// Express Session
app.use(expressSession({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Body Parser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, console.log('Server is running'));