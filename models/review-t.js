var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;

var schema = new Schema({
	user:{type: Schema.ObjectId, ref: 'User'},
	date:{type: Date},
	track:{type: Schema.ObjectId, ref: 'Track', required: true},
	note:{type: Number, required: true},
	comment:{type: String},
	difficultyEnter:{type: Number}, 
	difficultyContent:{type: Number}, 
	utility:[{
		job: {type :String},
		necessity: {type: Boolean}
	}]
});

module.exports = mongoose.model('Treview', schema);
