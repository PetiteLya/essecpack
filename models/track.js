var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	title:{type: String, required: true},
	places:{type: Number, required: true},
	language:{type: Boolean, required: true},// 0 for can't be taken entirely in English
	description:{type: String, required: true},// not sure it is necessary to put
	mandatory:[{type: Schema.ObjectId, ref: 'Course'}],
	optional:[{type: Schema.ObjectId, ref: 'Course'}],
	keyWords:{type: Array},
});

module.exports = mongoose.model('Track', schema);