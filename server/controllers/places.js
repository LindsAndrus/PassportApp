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
      console.log(req.body)
      Travelers.findOne({username: req.body.traveler}, function(err, traveler){
        var place = new Places(req.body.info);
        place._traveler = traveler._id;
        traveler.place.push(place);
        place.save(function(err){
          traveler.save(function(err){
            if(err){
              console.log(err);
            }else{
              console.log("success");
            }
          });
        });
      });
      // var place = new Places({lat: req.body.myLat, long: req.body.myLng});
      // place.save(function(err, results){
      //   if(err){
      //     console.log("errors")
      //     res.json(err)
      //   }else{
      //     res.json(results);
      //   }
      // })
    } //END CURRENT
  } //END RETURN
})();
