var Course = require('../models/course');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/essecpack');

var courses = [
	new Course ({
	title:"Création de sites Web",
	code:'IDSI31338',
	prerequisites:[],
	exam:false,
	language:true,
	otherLanguage:true,
	keyWords:['web development','Internet','coding'],
	}),

	new Course ({
	title:"Database Management",
	code:'IDSI31129',
	prerequisites:[],
	exam:true,
	language:false,
	otherLanguage:true,
	keyWords:['data','SQL'],
	}),

	new Course ({
	title:"Finl Accounting & Reporting",
	code:'CPTC31125',
	prerequisites:[],
	exam:true,
	language:false,
	otherLanguage:true,
	keyWords:['accounting','finance'],
	}),

	new Course ({
	title:"Management Control",
	code:'CPTG31148',
	prerequisites:[],
	exam:true,
	language:false,
	otherLanguage:true,
	keyWords:['management','organization'],
	}),

	new Course ({
	title:"Big Data Analytics",
	code:'IDSS31165',
	prerequisites:[],
	exam:false,
	language:false,
	otherLanguage:false,
	keyWords:['R','big data','analytics'],
	}),
];

var done = 0;
for (i=0; i<courses.length; i++){
	courses[i].save(function(err,result){
		done++;
		if (done===courses.length){
			exit();
		}
	});

}
function exit(){
	mongoose.disconnect();
}