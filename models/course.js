var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	title:{type: String, required: true},
	code:{type: String, required: true},
	
	//prerequisites:[{type: Schema.ObjectId, ref: 'Course'}], 
	//is there a problem of circle reference? how to import data, if one prerequisite does not exist yet?
	//how to put the relation "or" in the array ?
	
	exam:{type: Boolean, required: true},//need to find a way to get the data, might have to enter it myself
	language:{type: Boolean, required: true},// 0 for French, 1 for English
	otherLanguage:{type: Boolean, required: true},
	keyWords:{type: Array}, //should be array or string ? which one is better for search match ?

/* not sure need to put them here, since it is better to push data only once
	professors:[{type: Schema.ObjectId, ref: 'Professor'}],
	courseReviews:[{type: Schema.ObjectId, ref: 'Creview'}],
	track:[{type: Schema.ObjectId, ref: 'Track'}]
*/
});

module.exports = mongoose.model('Course', schema);