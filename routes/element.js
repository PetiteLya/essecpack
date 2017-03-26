var express = require('express');
var router = express.Router();

var Course = require('../models/course');


router.get('/course', function(req, res, next){
	res.render('element/course');
});

router.get('/prof', function(req, res, next){
	res.render('element/prof');
});

router.get('/track', function(req, res, next){
	res.render('element/track');
});


module.exports = router;
