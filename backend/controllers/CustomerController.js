const asyncHandler = require('express-async-handler')
const Order = require('../models/Order')


const getAllCustomers = asyncHandler(async(req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
  });


const getCustomerByID = asyncHandler(async(req,res) => {
    const orders = await Order.findById();
    res.status(200).json(orders)
})

const postCustomer = asyncHandler(async (req, res) => {
    const order = await Order.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    email: req.body.email
    });
    res.status(201).json(order);
  });

  const updateCustomer = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(400).json({ message: `Order not found` });
    }
    const updateSchema = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateSchema);
  });

  const deleteCustomer = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(400).json({ message: `Order not found` });
    }
  
    await order.remove();
  
    res.status(204).json({ id: req.params.id });
  });

  module.exports = {
    getAllCustomers, getCustomerByID, postCustomer, updateCustomer, deleteCustomer
}