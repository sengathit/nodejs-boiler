/**
 * Packages required for 
 * this application.
 */
let express = require('express');
let bodyParser = require('body-parser');
let request = require('request');

/**
 * Application level variables
 */
let port = process.env.PORT || 3000;
let router = require('./router/router');

let app = express();

app.use('/',router);
app.use('/about',router);

app.listen(port,() => console.log('Started me up on port : ' + port));

