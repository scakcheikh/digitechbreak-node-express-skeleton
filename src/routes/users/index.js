var   express = require('express');
var   users = require('../../controllers/users');
var   auth = require('../auth');

const routes  = express.Router();


routes.route('/:id')
  // Uncomment to allow authentication check
  // .all(auth.verifyToken)
  .get(users.read)
  .put(users.update)
  .delete(users.delete);

routes.route('/')
  /* Uncomment to allow  authentication check with auth.verifyToken */
  .get(/*auth.verifyToken,*/users.list)
  .post(users.create);

module.exports = routes;
