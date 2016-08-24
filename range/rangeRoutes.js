
var server = require('../server.js');

module.exports = function(app) {
  
  app.route('/:id')
    .get(function (req, res, next) {
      var id = req.params.id;
      res.send('Range = ' + id);
    });
    
};