
var server = require('../server.js');

module.exports = function(app) {
  
  app.route('/lowest')
    .get(function(req, res) {
      res.send('lowest GET');
    }); 
  
  app.route('/highest')
    .get(function(req, res) {
      res.send('highest GET');
    });
  
};