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
          Travelers.findOne({username: req.body.username}, function(err, travelerzz){
            console.log('got to finding a traveler!');
            console.log(travelerzz);
            if(err){
              return res.json(err);
            }
            if(travelerzz){
              console.log('got to comparing passwords for a traveler!');
                if(req.body.password === travelerzz.password) {
                  console.log('got to else of matching passwords!');
                  return res.json(travelerzz);
                }else{
                 return res.json({error_message:'Password does not match!'});
                }
            }
              traveler.save(function(err, results){
                if(err){
                  res.status(500).json(err);
                }else{
                  res.json(results);
                   }
                }); 
          
      });
    } 
    //END CREATE
// if(err){
//               traveler.save(function(err, results){
//                 if(err){
//                   res.status(500).json(err);
//                 }else{
//                   res.json(results);
//                    }
//                 });
//             }else {
//               console.log('got to comparing passwords for a traveler!');
//                 if(req.body.password === travelerzz.password) {
//                   console.log('got to else of matching passwords!');
//                   res.json(travelerzz);
//                 }else{
//                   res.send('Password does not match!');
//                 }
//             } 


  } //END RETURN
})();
