
var server = require('../server.js');

var apiGuide = 'Close5 Code Challenge: API Guide \n' + 
               'localhost:8080/                     - API Guide \n' + 
               'localhost:8080/api/recent/          - The entire list sorted by creation date (Ascending and Descending) \n' +
               'localhost:8080/api/price/lowest     - The entire listed sorted by the item’s price Ascending \n' +
               'localhost:8080/api/price/highest    - The entire listed sorted by the item’s price Descending \n' +
               'localhost:8080/api/id/ID_NUMBER     - Any single item by its id \n' +
               'localhost:8080/api/userid/ID_NUMBER - An array of items based on any userId \n' +
               'localhost:8080/api/range/LAT/LON    - A route to request for items within 50 miles of their location coordinates' ;
               
module.exports = function(app) {
  
  app.route('/')
    .get(function(req, res) {
      res.send(apiGuide);
    }); 
  
};