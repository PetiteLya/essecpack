var Course = require('../models/course');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/essecpack');



var courses = [
	new Course ({
	title:"Création de sites Web",
	code:'IDSI31338',
	content:'Ce cours permet à un étudiant de concevoir et créer un site Web normal et de comprendre les problématiques techniques.',
	professors:['Christophe HARRER'],
	prerequisites:[''],
	exam:false,
	language:true,
	otherLanguage:true,
	keyWords:['web development','Internet','coding'],
	}),

	new Course ({
	title:"Database Management",
	code:'IDSI31129',
	content:'Database management systems are programs aiming at storing, updating, and retrieving information from a database. There are many databases available in the market. The most popular are the Oracle (Oracle Corporation) and SQL Server (Microsoft). There are freely available databases (e.g. MySQL). Database Management Systems are available for personal computers and for huge systems like mainframes. DB2 is a database for IBM Mainframe systems. Students will be able to describe the function of a database and will be able to organize and retrieve department data using the databases currently available to them.',
	professors:['Isabelle Comyn-Wattiau'],
	prerequisites:[''],
	exam:true,
	language:false,
	otherLanguage:true,
	keyWords:['data','SQL'],
	}),

	new Course ({
	title:"Finl Accounting & Reporting",
	code:'CPTC31125',
	content:'This course is considered mandatory for all MSc students and is a core course for all prospective managers. The objective is to familiarize students in business administration to the main role of financial statements: provide information helpful to investors in the decision making process. The accent falls on understanding the main reporting practices of firms. The most recurrent concepts that can be found in the financial statements are defined briefly and interpreted through case studies based on public firms. Valuation issues are left for the more advanced financial accounting courses.',
	professors:['DICK Wolfgang','RICHARD Chrystelle'],
	prerequisites:['CPTC31081'],
	exam:true,
	language:false,
	otherLanguage:true,
	keyWords:['accounting','finance'],
	}),

	new Course ({
	title:"Management Control",
	code:'CPTG31148',
	content:'This course presents and critically discusses the basic concepts, practices and instruments of management control. It will not cover the management accounting concepts and techniques already studied in prerequisite courses.',
	professors:['ZICARI Adrian'],
	prerequisites:['CPTC31081'],
	exam:true,
	language:false,
	otherLanguage:true,
	keyWords:['management','organization'],
	}),

	new Course ({
	title:"Big Data Analytics",
	code:'IDSS31165',
	content:'This course deals with statistical methods for the analysis of the so-called Big Data. It aims at developing analytical problem-solving skills while presenting quantitative methods apt to support decision-making processes in the face of uncertainty. Participants shall learn how to manage complex data sets with an information retrieval approach. They will use a specialized technology and will work on a statistical project in teams so as to be trained on integrating the thinking of others in the interpretation and reporting of result.',
	professors:['ESPOSITO VINZI Vincenzo'],
	prerequisites:[''],
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