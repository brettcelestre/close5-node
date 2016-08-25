
var server = require('../server.js'),
    data = require('../data.js');

module.exports = function(app) {
  
  app.route('/')
    .get(function(req, res) {
      var recent = data.data.sort(function(a,b){
        return b.createdAt - a.createdAt;
      });
      res.send({ 'recentData': recent });
    }); 
  
};