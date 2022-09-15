const mongoose = require('mongoose');


const Items = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  }

})

const Order = mongoose.Schema(
  {
    items : Items
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('order', Order);