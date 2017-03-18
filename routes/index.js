var express = require('express');
var router = express.Router();
var Course = require('../models/course');

/* GET home page. */
router.get('/', function(req, res, next) {
  Course.find(function(err, docs){
  	res.render('index', { title: 'essecpack', courses: docs});
  });
});

module.exports = router;
