var csv = require("fast-csv");
var mongoose = require('mongoose');
var _ = require("lodash");
mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/essecpack');


var Schema = mongoose.Schema;

var professorSchema = new Schema({
    name: {type: String, required: true},
    courses:[{type: Schema.ObjectId, ref: 'Course'}]
});

mongoose.model('Professor', professorSchema);
 
var Professor = mongoose.model('Professor'); 

var professors = {};
var courses = {
    "Managing IT in the Digital Age":"58e8cf16a5227806b89345d3",
    "Management de l'IT à l'ère numérique":"58e8cf16a5227806b89345d4",
    "Managing Plans and Projects":"58e8cf16a5227806b89345d5",
    "Organization Theory & Behaviour":"58e8cf16a5227806b89345d6",
    "Atelier de négociation":"58e8cf16a5227806b89345d7",
    "International Strategy & Management":"58e8cf16a5227806b89345d8",
    "Publicité":"58e8cf16a5227806b89345d9",
    "Negotiation Workshop":"58e8cf16a5227806b89345da",
    "Entrepreneuriat":"58e8cf16a5227806b89345db",
    "Stratégie et management":"58e8cf16a5227806b89345dc",
    "Intercultural Management":"58e8cf16a5227806b89345dd",
    "International Luxury Distribution":"58e8cf16a5227806b89345de",
    "Droit des contrats":"58e8cf16a5227806b89345df",
    "Business Economics":"58e8cf16a5227806b89345e0",
    "e-business Strategy&Operations":"58e8cf16a5227806b89345e1",
    "Le cinéma allemand - niveau B/C":"58e8cf16a5227806b89345e2",
    "Droit & politiques de l'Europe":"58e8cf16a5227806b89345e3",
    "Luxury Retail Management":"58e8cf16a5227806b89345e4",
    "Corporate Strategy":"58e8cf16a5227806b89345e5",
    "Finance immobilière":"58e8cf16a5227806b89345e6",
    "Marketing management (en français)":"58e8cf16a5227806b89345e7",
    "Innovation Process Management":"58e8cf16a5227806b89345e8",
    "Competitive Strategy":"58e8cf16a5227806b89345e9",
    "Anthropologie marques de luxe":"58e8cf16a5227806b89345ea",
    "Droit des médias":"58e8cf16a5227806b89345eb",
    "Fondements de la finance":"58e8cf16a5227806b89345ec",
    "Capital investissement":"58e8cf16a5227806b89345ed",
    "Espagnol intermédiaire - niveau D":"58e8cf16a5227806b89345ee",
    "Français débutant suite de la FTS - niveau D":"58e8cf16a5227806b89345ef",
    "Options":"58e8cf16a5227806b89345f0",
    "Marketing Management (in English)":"58e8cf16a5227806b89345f1",
    "Consumer Behavior":"58e8cf16a5227806b89345f2",
    "International Marketing":"58e8cf16a5227806b89345f3",
    "Mise en scène du comportement":"58e8cf16a5227806b89345f4",
    "L'Espagne et ses particularités - niveau C/D":"58e8cf16a5227806b89345f5",
    "Sustainability Performance":"58e8cf16a5227806b89345f6",
    "Profils personnels et carrière":"58e8cf16a5227806b89345f7",
    "Théorie & comportement organisation":"58e8cf16a5227806b89345f8",
    "Excel avancé pour managers":"58e8cf16a5227806b89345f9",
    "Economie managériale":"58e8cf16a5227806b89345fa",
    "Strategy and Management":"58e8cf16a5227806b89345fb",
    "Corporate Financial Management":"58e8cf16a5227806b89345fc",
    "Philosophy and Trade":"58e8cf16a5227806b89345fd",
    "Chef de produit":"58e8cf16a5227806b89345fe",
    "Communication et culture (1) - Niveau B":"58e8cf16a5227806b89345ff",
    "Principles of Finance":"58e8cf16a5227806b8934600",
    "Marketing Research":"58e8cf16a5227806b8934601",
    "Advanced Business English - niveau A/B":"58e8cf16a5227806b8934602",
    "Gestion de projet":"58e8cf16a5227806b8934603",
    "Mergers and Acquisitions":"58e8cf16a5227806b8934604",
    "Entrepreneurship":"58e8cf16a5227806b8934605",
    "Strategic Cost Management":"58e8cf16a5227806b8934606",
    "Macroeconomic Theory & Development":"58e8cf16a5227806b8934607",
    "Création de produit innovant 1":"58e8cf16a5227806b8934608",
    "Concevoir un projet d'entreprise":"58e8cf16a5227806b8934609",
    "Anthropology of Luxury Brands":"58e8cf16a5227806b893460a",
    "Big Data Analytics":"58e8cf16a5227806b893460b",
    "Product Management":"58e8cf16a5227806b893460c",
    "Financial Markets":"58e8cf16a5227806b893460d",
    "Info comptables et financières":"58e8cf16a5227806b893460e",
    "Evaluation stratégique et fin.":"58e8cf16a5227806b893460f",
    "Communication orale avancée - niveau B/C":"58e8cf16a5227806b8934610",
    "Management of Organizations":"58e8cf16a5227806b8934611",
    "Financial Accounting & Reporting":"58e8cf16a5227806b8934612",
    "Services Management & Mkg":"58e8cf16a5227806b8934613",
    "Business Ethics":"58e8cf16a5227806b8934614",
    "Advanced Excel for Managers":"58e8cf16a5227806b8934615",
    "E-Business Entrepreneurship":"58e8cf16a5227806b8934616",
    "Financial Statement Analysis":"58e8cf16a5227806b8934617",
    "New venture design & planning":"58e8cf16a5227806b8934618",
    "Introduction à l'Amérique Latine - niveau B/C":"58e8cf16a5227806b8934619",
    "Monnaie et banque":"58e8cf16a5227806b893461a",
    "Chinois Langue et Culture (1) - niveau C":"58e8cf16a5227806b893461b",
    "Global Strategy & Luxury Business":"58e8cf16a5227806b893461c",
    "Finance internationale":"58e8cf16a5227806b893461d",
    "Séminaire Management : Regarder l’Echec en face":"58e8cf16a5227806b893461e",
    "Les fondements de la stratégie":"58e8cf16a5227806b893461f",
    "Doing Business":"58e8cf16a5227806b8934620",
    "Portfolio & Investment":"58e8cf16a5227806b8934621",
    "Lux. Retail Excel. & Merchand":"58e8cf16a5227806b8934622",
    "New Business Dvpt-Agri-food Sect.":"58e8cf16a5227806b8934623",
    "Gestion financière court terme":"58e8cf16a5227806b8934624",
    "Management of International Operations":"58e8cf16a5227806b8934625",
    "Langage C":"58e8cf16a5227806b8934626",
    "Pratique conseil en stratégie":"58e8cf16a5227806b8934627",
    "International Finance":"58e8cf16a5227806b8934628",
    "Agri-food Commodity Markets":"58e8cf16a5227806b8934629",
    "Digital Marketing Strategy":"58e8cf16a5227806b893462a",
    "Mging.Social Relion & Networks":"58e8cf16a5227806b893462b",
    "Management Control":"58e8cf16a5227806b893462c",
    "Cinéma et Société - niveau B/C":"58e8cf16a5227806b893462d",
    "Contrôle de gestion":"58e8cf16a5227806b893462e",
    "Negotiating in English (1) - niveau B/C":"58e8cf16a5227806b893462f",
    "Department seminar in ECO on the theme: Nobel Ideas in Economics":"58e8cf16a5227806b8934630",
    "Droit urbanisme & immobilier":"58e8cf16a5227806b8934631",
    "B2B Marketing":"58e8cf16a5227806b8934632",
    "Civilisation française (1) - niveau C/D":"58e8cf16a5227806b8934633",
    "Stratégie de l'Industrie du Voyage":"58e8cf16a5227806b8934634",
};
 
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

});
 
//make sure that we are closing the connection to mongo if something happens to node (like Ctrl + C)
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
});