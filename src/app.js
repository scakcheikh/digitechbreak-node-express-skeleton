var  bodyParser = require( 'body-parser');
var  morgan = require( 'morgan');
var  mongoose = require('mongoose');
var  jwt = require('jsonwebtoken');

var express = require("express");

var User = require( './models/user');
var Item = require( './models/item');
// var   Rdv = require( './models/rdv');

var config = require( './config/dev');
var db = require( './db/db');
var routes = require( './routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

const port = process.env.PORT || config.server.port;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;
