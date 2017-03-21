var express = require('express');
var router = express.Router();

var Course = require('../models/course');


router.get('/course', function(req, res, next){
	res.render('list/course');
});

router.get('/prof', function(req, res, next){
	res.render('list/prof');
});

router.get('/track', function(req, res, next){
	res.render('list/track');
});


module.exports = router;
