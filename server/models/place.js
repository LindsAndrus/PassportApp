console.log("made it to the place model")

var mongoose = require('mongoose');

var PlacesSchema = new mongoose.Schema({
  city: String,
  country: String
});

mongoose.model('places', PlacesSchema);
