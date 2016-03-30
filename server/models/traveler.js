console.log("made it to the traveler model")

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TravelersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      min_length: 4
    },
    password: {
      type: String,
      min_length: 8
    },
    place: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Places',
        checkedIn: Boolean
      }],
      default: []
    },
  },
  {
    timestamps: {
      createdAt:'created_at',
      updatedAt:'updated_at'
    }
  }
);
TravelersSchema.path('name').required(true, 'Name cannot be blank');
TravelersSchema.path('username').required(true, 'Username cannot be blank');
TravelersSchema.path('password').required(true, 'Password cannot be blank');

var Travelers = mongoose.model('travelers', TravelersSchema);
