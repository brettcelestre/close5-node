
var server = require('../app.js'),
    data = require('../data.js');

module.exports = function(app) {
  
  app.route('/lowest')
    .get(function(req, res) {
      var lowest = data.data.sort(function(a,b){
        return a.price - b.price;
      });
      res.send({ 'lowestPriceData': lowest });
    }); 
  
  app.route('/highest')
    .get(function(req, res) {
      var highest = data.data.sort(function(a,b){
        return b.price - a.price;
      });
      res.send({ 'highestPriceData': highest });
    });
  
};