console.log("made it to the traveler model")

var mongoose = require('mongoose');

var TravelersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

mongoose.model('travelers', TravelersSchema);
