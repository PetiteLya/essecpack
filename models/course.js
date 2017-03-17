var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	title:{type: String, required: true},
	code:{type: String, required: true},
	content:{type: String, required: true},
	professors:{type: Array, required:true},
	prerequisites:{type: Array, required:true},
	exam:{type: Boolean, required: true},
	language:{type: Boolean, required: true},
	otherLanguage:{type: Boolean, required: true},
	keyWords:{type: Array, required: true},
});

module.exports = mongoose.model('Course', schema);