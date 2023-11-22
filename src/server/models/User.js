// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other fields...

  // Add Aadhar card details
  aadharCard: {
    cardNumber: {
      type: String,
      required: true,
    },
    // Add other Aadhar card details as needed
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
