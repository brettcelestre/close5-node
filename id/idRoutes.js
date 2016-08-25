
var server = require('../server.js'),
    data = require('../data.js');

module.exports = function(app) {
  
  app.route('/:id')
    .get(function (req, res, next) {
      var id = req.params.id,
          item = { itemData: []}
      data.data.forEach(function(val) {
        if ( val.id === id ) {
          item.itemData.push(val);
        }
      });
      res.send(item);
    });
    
};