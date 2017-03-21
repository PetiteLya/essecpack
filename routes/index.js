var express = require('express');
var router = express.Router();

var Course = require('../models/course');


/* GET home page. */
router.get('/', function(req, res, next) {
  Course.find(function(err, docs){
  	res.render('index', { title: 'essecpack', courses: docs});
  });
});

/* GET contact form */
router.get('/contact', function(req, res, next){
	res.render('contact');
});

/* GET about page */
router.get('/about', function(req, res, next){
	res.render('about');
});

/* GET term of use */
router.get('/terms', function(req, res, next){
	res.render('terms');
});


module.exports = router;
