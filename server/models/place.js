console.log("made it to the place model")

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new mongoose.Schema({
  city: String,
  country: String,
  latitude: Number,
  longitude: Number,
  _traveler: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Travelers'
    }],
    default: []
  }
});

var Places = mongoose.model('places', PlacesSchema);
