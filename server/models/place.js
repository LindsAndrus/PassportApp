console.log("made it to the place model")

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new mongoose.Schema(
  {
    city: {
      type: String
    },
    country: {
      type: String
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    placeId: {
      type: String,
      unique: true
    },
    traveler: [{
        type: Schema.Types.ObjectId,
        ref: 'Travelers'
      }]
    
  }
);

var Places = mongoose.model('places', PlacesSchema);
