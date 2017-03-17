var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title:{type: String, required: true},
	places:{type: Number, required: true},
	language:{type: Boolean, required: true},
	description:{type: String, required: true},
	keyWords:{type: Array, required: true},
	mandatory:{type: Array, required: true},
	optional:{type: Array, required: true},
});