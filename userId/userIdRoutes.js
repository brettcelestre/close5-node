
var server = require('../app.js'),
    data = require('../data.js');

module.exports = function(app) {
  
  app.route('/:id')
    .get(function (req, res, next) {
      // Stores id number from request parameter
      var id = req.params.id,
          usersItems = {'userIdData': []};
          
      // Iterates over data objects
      data.data.forEach(function(val) {
        // If item id matches requested id
        if ( val.userId === id ) {
          // Push into item dataset
          usersItems.userIdData.push(val);
        }
      });
      
      // Sends back users item dataset
      res.send(usersItems);
    });
    
};