var csv = require("fast-csv");
 var groupedProf = {};
 var listProf = [{id:1,name:"chris"},]
csv
 .fromPath("my.csv")
 .on("data", function(data){
	groupedProf[data.profId]=groupedProf[data.profId]||[];
	groupedProf[data.profId].push(data.courseId);

     console.log(data);
 })
 .on("end", function(){
 	var tranformedList = listProf.map(function(prof){
 		prof.listCourses = groupedProf[prof.id];
 	});

     console.log("done");
 });
 