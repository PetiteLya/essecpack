var csv = require("fast-csv");
var mongoose = require('mongoose');
var _ = require("lodash");
mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/essecpack');


var Schema = mongoose.Schema;

var courseSchema = new Schema({
    title:{type: String, required: true},
});
mongoose.model('Course', courseSchema);

var Course = mongoose.model('Course');


var professorSchema = new Schema({
    name: {type: String, required: true},
    courses:[{type: Schema.ObjectId, ref: 'Course'}]
});

mongoose.model('Professor', professorSchema);
 
var Professor = mongoose.model('Professor'); 

var professors = {};

/* need to find out how to construct this structure from courses
var courses = {
    "Acteurs publics":"58dbe5c32b0db120badbaa9f",
    "Advanced Business English - niveau A/B":"58dbe5c32b0db120badbaaa0",
    "Advanced Business English _ A/B":"58dbe5c32b0db120badbaaa1",
    "Advanced Excel for Managers":"58dbe5c32b0db120badbaaa2",
    "Advanced Options":"58dbe5c32b0db120badbaaa3",
}

*/

//connect to mongo database
 
var db = mongoose.connection;
 
//if any errors, show them in console
db.on('error', function (err) {
 
    console.log('connected ' + err.stack);
 
});
 
//when disconnect from mongo, show this in console
db.on('disconnected', function(){
    console.log('disconnected');
});

//when connect to mongo, show this in console
db.on('connected',function(){
 
    console.log('connected'); 
     //load some data to the database
    csv.fromPath("courses.csv", {headers: true})
    .on("data", function(data){
        courses = new Course(data);
        courses.save( function( err, user ){
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
    
/*
    csv.fromPath("professors.csv", {headers: true})
    .on("data", function(data){ 
        
        professors[data.name]=professors[data.name]||[];
        professors[data.name].push(data.courses);
        
    }) 
    .on("end", function(){
               
        console.log(professors);
        professors = _.map(professors,function(value,key){
            return {name:key,courses:_.map(value,function(item){return courses[item];})};
        });
        console.log(professors);

        _.each(professors,function(prof){
            var professorModel= new Professor(prof);
            professorModel.save();
        });

    })
*/

});
 
//make sure that we are closing the connection to mongo if something happens to node (like Ctrl + C)
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
});