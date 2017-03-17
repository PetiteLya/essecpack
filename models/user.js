var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	email:{type: String, required: true},
	password:{type: String, required: true},
	status:{type: String, required: true},
	collection:{type: Array, required:false},
});