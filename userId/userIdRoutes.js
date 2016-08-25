
var server = require('../server.js'),
    data = require('../data.js');

module.exports = function(app) {
  
  app.route('/:id')
    .get(function (req, res, next) {
      var id = req.params.id,
          usersItems = {'userIdData': []};
      
      data.data.forEach(function(val) {
        if ( val.userId === id ) {
          usersItems.userIdData.push(val);
        }
      })
      res.send(usersItems);
    });
    
};