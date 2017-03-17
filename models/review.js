var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	userID:{type: String, required: false},
	object:{type: Array, required: true},//difficulty: a review can be made on a professor in a specific course, thus two review objects, not sure it is the best way to put it
	note:{type: Array, required: true},
	comment:{type: Array, required:true},
	points:{type: Number, required:false},
	utility:{type: Array, required: false},//not sure how to put it, need to contain two info : which jobs and its level of relativity
});