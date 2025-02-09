var   express = require('express');
var   items = require('../controllers/items');
var   auth = require('../controllers/auth');

const routes  = express.Router({ mergeParams: true });

// Uncomment to allow authentication check
// routes.use(auth.verifyToken);

routes.route('/')
  .get(items.list)
  .post(items.create);

routes.route('/:id')
  .get(items.read)
  .put(items.update)
  .delete(items.delete);

module.exports = routes;
