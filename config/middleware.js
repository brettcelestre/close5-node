
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  
  //use express router mini-app
  var homeRouter = express.Router(),
      recentRouter = express.Router(),
      idRouter = express.Router(),
      priceRouter = express.Router(),
      priceRouter = express.Router(),
      rangeRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  // 
  app.use('/', homeRouter);
  // The entire list sorted by creation date (Ascending and Descending)
  app.use('/api/recent', recentRouter);
  // The entire listed sorted by the item’s price Ascending
  app.use('/api/price/lowest', priceRouter);
  // The entire listed sorted by the item’s price Descending
  app.use('/api/price/highest', priceRouter);
  // Any single item by its id 
  app.use('/api/id', idRouter);
  // An array of items based on any userId
  app.use('/api/userid', idRouter);
  // A route to request for items within 50 miles of their location coordinates
  app.use('/api/range', rangeRouter);

  require('../home/homeRoutes.js')(homeRouter);
  // require('../recent/recentRoutes.js')(recentRouter);
  // require('../id/idRoutes.js')(idRouter);
  // require('../range/rangeRoutes.js')(rangeRouter);
};
