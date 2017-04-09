var express = require('express');
var router = express.Router();

var Course = require('../models/course');
var Contact = require('../models/contact');


/* GET home page. */
router.get('/', function(req, res, next) {
  Course.find(function(err, docs){
  	res.render('index', { title: 'essecpack', courses: docs});
  });
});

/*GET search page*/
router.get('/search',function(req, res, next){
	var regex = new RegExp(req.query.key, 'i');
    Course.find({text: regex}, function(err,results){
        res.render('search',{results:req.query.key});
    });
});
// it seems that it is not searching in database

/* GET contact form */
router.get('/contact', function(req, res, next){
	res.render('contact',{name: req.name, email: req.email, message: req.message});
});

/*Save messages sent via contact form*/
router.post('/contact',function(req, res, next){
	new Contact ({
		name: req.body.name,
		email: req.body.email,
		message: req.body.message 
	}).save();
	res.redirect('/');

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
