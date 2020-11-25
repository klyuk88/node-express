var express = require('express');
var router = express.Router();

const data = {
  title: "url-min"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;
