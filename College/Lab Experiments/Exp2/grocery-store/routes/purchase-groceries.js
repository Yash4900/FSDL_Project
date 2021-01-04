var express = require('express');
var router = express.Router();

/* GET purchase page. */
router.get('/', function(req, res, next) {
  res.render('purchase-groceries');
});

module.exports = router;
