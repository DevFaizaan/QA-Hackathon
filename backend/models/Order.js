const mongoose = require('mongoose');


// const Items = mongoose.Schema({
//   itemName: {
//     type: String,
//     required: true,
//   },
//   quantity: {
//     type: Number,
//   }

// })

const Order = mongoose.Schema({

    itemName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    address3: {
      type: String,
    },
    city: {
      type: String,
    }

});


module.exports = mongoose.model('order', Order);