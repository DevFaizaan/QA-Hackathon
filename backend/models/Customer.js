import Order from './Order';
const mongoose = require('mongoose');

const Customer = mongoose.Schema(
  {
    name: {
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
    },
    order : Order.Order
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('customer', Customer);