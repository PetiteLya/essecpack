var express = require('express');
var router = express.Router();

var Course = require('../models/course');
var Professor = require('../models/professor');
var Creview = require('../models/review-c');


router.get('/course', function(req, res, next){
	Course.find(function(err, docs){
  		res.render('review/course', {courses: docs, course: req.course, note: req.note, comment: req.comment});
  	});
  	
});

router.post('/course',function(req, res, next){
	//console.log(courseid); //how to get courseid if req.course is course title
	new Creview ({
		//course: ,
		note: req.body.note,
		comment: req.body.comment 
	}).save();
	res.redirect('/');

});

router.get('/prof', function(req, res, next){
	res.render('review/prof');
});

router.get('/track', function(req, res, next){
	res.render('review/track');
});

module.exports = router;