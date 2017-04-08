var express = require('express');
var router = express.Router();

var Course = require('../models/course');
var Professor = require('../models/professor');


router.get('/course/:id', function(req, res, next){
	//need to find out how to retrive professor names with courseId (stored in a different collection than courses)
	var professors = Professor.find({courses:req.params.id},function(err, professors){
        if(err){
          console.log(err);
          return null;
        }else{
          return professors;
        }
    });  
	console.log(professors);
	Course.findById(req.params.id, function(err, docs){
  		res.render('element/course', {course: docs, professors: professors});
  	});
});

router.get('/prof', function(req, res, next){
	res.render('element/prof');
});

router.get('/track', function(req, res, next){
	res.render('element/track');
});


module.exports = router;
