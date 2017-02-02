const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  name: {
    type: String,
    minlength: 1
  },
  age: {
    type: Number
  },
  location: {
    type: String
  }
});

module.exports = { User };
