
var express = require('express');
// var data = require('./data.js')
var middleware = require('./config/middleware.js');

var app = express();

var PORT = process.env.PORT || 8080;

middleware(app, express);

var server = app.listen(PORT);
console.log('Listening on', PORT);
