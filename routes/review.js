var express = require('express');
var router = express.Router();

router.get('/course', function(req, res, next){
	res.render('review/course');
});

router.get('/prof', function(req, res, next){
	res.render('review/prof');
});

router.get('/track', function(req, res, next){
	res.render('review/track');
});

module.exports = router;