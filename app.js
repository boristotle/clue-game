'use strict';
let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.listen(8080, function() {
    console.log('The app is listening on port 8080!');
});