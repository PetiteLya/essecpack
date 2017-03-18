var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	user:{type: Schema.ObjectId, ref: 'User'},
	date:{type: Date},
	course:{type: Schema.ObjectId, ref: 'Course'},
	professor:{type: Schema.ObjectId, ref: 'Professor', required: true},
	note:{type: Number, required: true},
	comment:{type: String},
	points:{type: Number},//can only be an input when the course is specified
});

module.exports = mongoose.model('Preview', schema);