var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET gear page. */
router.get('/gear', function(req, res) {
  res.render('gear');
});

/* GET profile page. */
router.get('/profile', function(req, res) {
  res.render('profile');
});

module.exports = router;
