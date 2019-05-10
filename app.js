let express = require('express');
let bodyParser = require('body-parser');
let request = require('request');
let port = process.env.PORT || 3000;

let app = express();

app.get('/',(req,res) => {
    res.send('hey earth');
});

app.listen(port,() => console.log('Started me up on port : ' + port));

