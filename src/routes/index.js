var   express = require('express');
var   items = require('./items');
var   auth = require('./auth');
var   users = require('./users');
// var   rdv = require( './rdv';
var   response = require('../helpers/response');

const routes  = express.Router();

routes.use(response.setHeadersForCORS);

routes.use('/', auth);
routes.use('/users', users);
// routes.use('/rdv', rdv);
routes.use('/items', items);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

routes.use(function(req, res) {
  response.sendNotFound(res);
});

module.exports = routes;
