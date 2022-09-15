const mongoose = require('mongoose');


const Item = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  }

})
const Basket = mongoose.Schema({
  items: Item,
  totalPrice: Item.quantity * Item.price,
})

const Order = mongoose.Schema(
  {
    products: {
      Basket,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    orderID:{
        type: Number,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('customer', Customer);