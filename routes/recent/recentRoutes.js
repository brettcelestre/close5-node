
var server = require('../../app.js'),
    data = require('../../data.js');

module.exports = function(app) {
  
  app.route('/')
    .get(function(req, res) {
      // Stores sorted data
      var recent = data.data.sort(function(a,b){
        // Stores by recent date
        return b.createdAt - a.createdAt;
      });
      
      // Sends back object with recent data
      res.send({ 'recentData': recent });
    }); 
  
};