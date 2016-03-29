console.log('made it to BE places controller');
var mongoose = require('mongoose');
var Places = mongoose.model('places');

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
    } //END CREATE
  } //END RETURN
})();
