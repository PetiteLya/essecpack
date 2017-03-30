var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name:{type: String, required: true},
	email:{type: String, required: true},
	message:{type: String, required: true}
});

module.exports = mongoose.model('Contact', contactSchema);