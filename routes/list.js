var express = require('express');
var router = express.Router();

var Course = require('../models/course');
var Professor = require('../models/professor');


router.get('/course', function(req, res, next){
	Course.find(function(err, docs){
  		res.render('list/course', {courses: docs});
  	});
});

router.get('/prof', function(req, res, next){
	Professor.find(function(err,docs){
		res.render('list/prof',{professors: docs});
	});
});

router.get('/track', function(req, res, next){
	res.render('list/track');
});


module.exports = router;
