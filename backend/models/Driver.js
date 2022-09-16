const mongoose = require('mongoose');

const Driver = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
      },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('driver', Driver);