
var server = require('../app.js');
var path   = require("path");
       
module.exports = function(app) {
  
  app.route('/')
    .get(function(req, res) {
      // Sends index.html file which has API Guide
      res.sendFile(path.join(__dirname+'/index.html'));
    }); 
  
};