var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing.html.ejs');
});
/* GET testing zone (index) page. */
router.get('/testing-area', function(req, res, next) {
  res.render('index.html.ejs');
});

module.exports = router;
