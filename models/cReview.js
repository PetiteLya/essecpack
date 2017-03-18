var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	user:{type: Schema.ObjectId, ref: 'User'},
	date:{type: Date},
	course:{type: Schema.ObjectId, ref: 'Course', required: true},
	note:{type: Number, required: true},
	comment:{type: String},
	utility:[{
		job: {type :String},
		necessity: {type: Boolean}//0 for "can be useful"; 1 for "necessary"
	}]
});

module.exports = mongoose.model('Creview', schema);