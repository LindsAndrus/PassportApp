console.log("made it to the traveler model")

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TravelersSchema = new mongoose.Schema({
  username: {
    type: String,
    min_length: 4,
    unique: true
  },
  password: {
    type: String,
    min_length: 8
  },
  place: [{
    location: {
      type: Schema.Types.ObjectId,
      ref: 'Places',
    },
    checkedIn: {
      type: Boolean,
      default: false
    },
    dateVisited: {
      type: Date,
      default: Date.now()
    }
  }],


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
TravelersSchema.path('username').required(true, 'Username cannot be blank');
TravelersSchema.path('username').unique(true, 'That username is not available, please select another');
TravelersSchema.path('password').required(true, 'Password cannot be blank');

var Travelers = mongoose.model('travelers', TravelersSchema);
