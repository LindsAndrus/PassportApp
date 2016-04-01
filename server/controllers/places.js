console.log('made it to BE places controller');
var mongoose = require('mongoose');
var Places = mongoose.model('places');
var Travelers = mongoose.model('travelers');

module.exports = (function() {
  return {
    // EXAMPLE OF GET (INDEX) METHOD //
    index: function(req, res) {
      Places.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
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
          place.traveler = traveler._id;
          place.save(function(err, savedPlace){
            Travelers.update({_id: traveler._id}, {$addToSet: {place: place._id}}, function(err, thing){
              console.log(thing);
              if(err){
                console.log(err);
              }else{
                console.log("success");
              }
            });
            // traveler.save(function(err){
          // });
        });
      });
    });
    } //END CURRENT
  } //END RETURN
})();
