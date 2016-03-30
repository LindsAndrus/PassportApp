console.log('made it to BE traveler controller');
var mongoose = require('mongoose');
var Travelers = mongoose.model('travelers');

module.exports = (function() {
  return {
    // EXAMPLE OF GET (INDEX) METHOD //
    index: function(req, res) {
      Travelers.find({}, function(err, results){
        if(err) {
          console.log(err.message);
        } else {
          res.json(results);
        }
      })
    }, // END INDEX
    // EXAMPLE OF CREATE (POST) METHOD //
    create:function(req, res){
      console.log(req.body);
      var traveler = new Travelers({username: req.body.username, password: req.body.password});
      traveler.save(function(err, results){
        if(err){
          console.log(err.errors);
          res.status(500).json(err.errors);
        }else{
          res.json(results);
        }
      })
    } //END CREATE
  } //END RETURN
})();
