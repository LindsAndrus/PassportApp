console.log('made it to BE places controller');
var mongoose = require('mongoose');
var Places = mongoose.model('places');
var Travelers = mongoose.model('travelers');

module.exports = (function(){
  return {
    index: function(req, res){
      Travelers.find({username: req.params.username})
      .populate({path: 'place.location'})
      .exec(function(err, data){
        // if(data.place.checkedIn == 'true'){
        //   var placesBeen = data.place;
        // }
        // if(data.place.checkedIn == 'false') {
        //   var placesWishing = data.place;
        // }
          res.json({places: data});
      })
    }, // END INDEX
    // EXAMPLE OF CREATE (POST) METHOD //
    create:function(req, res){
      var place = new Places({city: req.body.city, country: req.body.country});
      place.save(function(err){
        if(err){
          console.log("errors")
        }else{
          res.redirect('/places');
        }
      })
    }, //END CREATE
    current:function(req, res){
      console.log(req.body.info.placeId)
      Travelers.findOne({username: req.body.traveler}, function(err, traveler){
        console.log('traveler: ', traveler);
        Places.findOne({placeId: req.body.info.placeId}, function(err, place){
          if(place === null){
            place = new Places(req.body.info);
            console.log('Place: ', place);
          }
          place.traveler.push(traveler._id);
          place.save(function(err, savedPlace){
            var thisLocation = {};
            thisLocation.location = savedPlace._id;
            thisLocation.checkedIn = true;
            thisLocation.dateVisted = Date.now;

            var visited = false;
            for (var i = 0; i < traveler.place.length; i ++){
              // console.log(traveler.place[i].location == String(savedPlace._id));
              if (traveler.place[i].location && traveler.place[i].location == String(savedPlace._id)){
                visited = true;
                break;
              }
            }
            if (!visited){
              traveler.place.push(thisLocation);
              traveler.save();
            }
            // traveler.save(function(err){
          // });
        });
      });
    });
    } //END CURRENT
  } //END RETURN
})();
