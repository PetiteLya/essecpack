var csv = require("fast-csv");
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/essecpack');


var Schema = mongoose.Schema;

var professorSchema = new Schema({
	name: {type: String, required: true},
	courses:[{type: Schema.ObjectId, ref: 'Course'}] //validation error, can't be recognized as objectID
});

mongoose.model('Professor', professorSchema);
 
var Professor = mongoose.model('Professor'); 
 
//connect to our mongo database
 
var db = mongoose.connection;
 
//if we have any errors, show them in console
db.on('error', function (err) {
 
    console.log('connected ' + err.stack);
 
});
 
//when we disconnect from mongo, show this in console
db.on('disconnected', function(){
    console.log('disconnected');
});

//when we connect to mongo, show this in console
db.on('connected',function(){
 
    console.log('connected'); 
     //load some data to the database
    csv.fromPath("professors.csv", {headers: true})
 	.on("data", function(data){ 
 		
		var professors = new Professor(data);
		// these two lines are completely overlooked
		professors[data.name]=professors[data.name]||[];
		professors[data.name].push(data.courses);
		

		professors.save( function( err, user ){
                if(!err){
                    console.log('Saved');
                }
                else{
                    console.log(err);
                }
    	});
    }) 
 	.on("end", function(){
 		console.log("done");
 		});
});
 
//make sure that we are closing the connection to mongo if something happens to node (like Ctrl + C)
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
});
