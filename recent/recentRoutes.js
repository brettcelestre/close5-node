
var server = require('../server.js');

module.exports = function(app) {
  
  app.route('/')
    .get(function(req, res) {
      res.send('recent GET');
    }); 
  
};