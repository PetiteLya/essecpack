var csv = require("fast-csv");
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/essecpack');

var professors = [{name:"", courses:[]},];

 
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
 		
		professors[data.name]=professors[data.name]||[];
		professors[data.name].push(data.courses);
		
        //professors.save(); //TypeError: professors.save is not a function
		
    }) 
 	.on("end", function(){
        
        console.log(professors);
    })

});
 
//make sure that we are closing the connection to mongo if something happens to node (like Ctrl + C)
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
});