/**
 * Packages required for 
 * this application.
 */
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const hbs = require('hbs');

/**
 * Application level variables
 */
const port = process.env.PORT || 3000;
const router = require('./router/router');

const app = express();

/**
 * Path to static assets
 */
const publicDirectoryPath = path.join(__dirname, '/public');

/**
 * Path to views/partials
 */
const pathToPartials = path.join(__dirname,'views/partials');

/**
 * Set the handlebars view engine
 */
app.set('view engine','hbs');
hbs.registerPartials(pathToPartials);
/**
 * Setup static directory and assets to serve
 */
app.use(express.static(publicDirectoryPath));

/**
 * Parse incoming request
 */
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/**
 * Routes
 */
app.use('/',router);
app.use('/about',router);

app.listen(port,() => console.log('Started me up on port : ' + port));

