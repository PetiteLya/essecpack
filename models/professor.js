var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	courses:[{type: Schema.ObjectId, ref: 'Course'}]
});

module.exports = mongoose.model('Professor', schema);