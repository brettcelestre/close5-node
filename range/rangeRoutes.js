
var server = require('../app.js'),
    data = require('../data.js');

module.exports = function(app) {

  app.route('/:lat/:lon')
    .get(function (req, res, next) {
        // Users Latitude
        var userLat = req.params.lat,
        // Users Longitude
            userLon = req.params.lon,
        // Stores our final dataset
            items = { range50MilesData: []};

      // Iterate over each item 
      data.data.forEach(function(val){
        // Stores items latitude
        var itemLat = val.loc[0],
        // Stores items longitude
            itemLon = val.loc[1];
        
        // This is the Haversine Formula, this finds the dis
        var getDistanceFromLatLonInKm = function(lat1,lon1,lat2,lon2) {
          var R = 6371;   // Radius of the earth in km
          var dLat = deg2rad(lat2-lat1);  // deg2rad below
          var dLon = deg2rad(lon2-lon1); 
          var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c;        // Distance in km
          var mi = d * 0.62137119; // Converts km to miles
          return mi;
        }
        // getDistanceFromLatLonInKm helper function
        function deg2rad(deg) {
          return deg * (Math.PI/180)
        }
        // Sets distance equal to our total distance in miles between user/item coordinates
        var distance = getDistanceFromLatLonInKm(itemLat, itemLon, userLat, userLon);

        // If the distance is <= 50 miles
        if ( distance <= 50 ) {
          // Add the item to our data set
          items.range50MilesData.push(val);
        }
      });
      
      res.send(items);
    });
    
};