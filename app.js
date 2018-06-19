
// Sample node.js web app for bTreePress How-To-Use-Docker-With-Continous-Integration-To-Build-A-DevOps-Automated-Workflow
 // For demonstration purposes only
 'use strict';
var port = 8080;
  
 var express = require('express'),
     app = express();
 
 app.set('views', 'views');
 app.set('view engine', 'hbs');
 
 app.get('/', function(req, res) {
     res.render('home', {
   });
 });
 
 app.listen(port, () => console.log("server is running on port ", port));
 module.exports.getApp = app; 
