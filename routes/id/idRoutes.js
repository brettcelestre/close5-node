
var server = require('../../app.js'),
    data = require('../../data.js');

module.exports = function(app) {
  
  app.route('/:id')
    .get(function (req, res, next) {
      // Stores id number from request parameter
      var id = req.params.id,
          item = { itemData: []};
      
      // Iterates over data objects
      data.data.forEach(function(val) {
        // If item id matches requested id
        if ( val.id === id ) {
          // Push into item dataset
          item.itemData.push(val);
        }
      });
      
      // Sends item dataset
      res.send(item);
    });
    
};