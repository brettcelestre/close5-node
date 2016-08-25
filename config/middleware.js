
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  
  // Sets up Express routers
  var homeRouter = express.Router(),
      recentRouter = express.Router(),
      idRouter = express.Router(),
      userIdRouter = express.Router(),
      priceRouter = express.Router(),
      priceRouter = express.Router(),
      rangeRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  
  // API Guide
  app.use('/', homeRouter);
  // The entire list sorted by creation date (Ascending and Descending)
  app.use('/api/recent', recentRouter);
  // The entire listed sorted by the item’s price Ascending or Descending
  app.use('/api/price', priceRouter);
  // Any single item by its id 
  app.use('/api/id', idRouter);
  // An array of items based on any userId
  app.use('/api/userid', userIdRouter);
  // A route to request for items within 50 miles of their location coordinates
  app.use('/api/range', rangeRouter);

  // Requires router files to each route
  require('../routes/home/homeRoutes.js')(homeRouter);
  require('../routes/recent/recentRoutes.js')(recentRouter);
  require('../routes/price/priceRoutes.js')(priceRouter);
  require('../routes/id/idRoutes.js')(idRouter);
  require('../routes/userId/userIdRoutes.js')(userIdRouter);
  require('../routes/range/rangeRoutes.js')(rangeRouter);
};
