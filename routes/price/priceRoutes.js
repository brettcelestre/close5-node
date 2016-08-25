
var server = require('../../app.js'),
    data = require('../../data.js');

module.exports = function(app) {
  
  app.route('/lowest')
    .get(function(req, res) {
      // Sorts and stores lowest priced items
      var lowest = data.data.sort(function(a,b){
        return a.price - b.price;
      });
      // Sends back object with lowest item data
      res.send({ 'lowestPriceData': lowest });
    }); 
  
  app.route('/highest')
    .get(function(req, res) {
      // Sorts and stores highest priced items
      var highest = data.data.sort(function(a,b){
        return b.price - a.price;
      });
      // Sends back object with highest item data
      res.send({ 'highestPriceData': highest });
    });
  
};