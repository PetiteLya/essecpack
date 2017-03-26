var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
	email:{type: String, required: true},
	password:{type: String, required: true},
	year:{type: Number},
	favorites:{
		course: [{type: Schema.ObjectId, ref: 'Course'}],
		professor:[{type: Schema.ObjectId, ref: 'Professor'}],
		track:[{type: Schema.ObjectId, ref: 'Track'}],
	},//is this structure too complicated ? maybe better to divide into 3 properties ?
});

userSchema.methods.encryptPassword = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

module.exports= mongoose.model('User', userSchema);