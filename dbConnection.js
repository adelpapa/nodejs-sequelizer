var Sequelize = require('sequelize');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('../application.properties');

var sequelize = new Sequelize(properties.get('database.url'));
var User = sequelize.import(__dirname + "/models/usuario")
var User = sequelize.import(__dirname + "/models/categoria")
var User = sequelize.import(__dirname + "/models/atributo")
var User = sequelize.import(__dirname + "/models/imagen")



//sequelize.sync().then(function() {
//  console.log('Databse synchronized!!');
//});


//User.create({
//    firstName: 'Aleandro',
//    lastName: 'Del Papa',
//    address: 'La Rioja 4041',
//    birthday: new Date(1989, 01, 09),
//    jobId: 1
//})

//User.findOne().then(function(user) {
//    console.log(user.dataValues);
//    console.log('ahora si');
//    console.log(user.job.dataValues);    
//});

/*Job.findAll().then(function(jobs) {
    for(var i = 0; i < jobs.length; i++) {
        console.log(jobs[i].dataValues);
    }    
})*/