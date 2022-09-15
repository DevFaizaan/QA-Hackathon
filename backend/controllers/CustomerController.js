const asyncHandler = require('express-async-handler')
const Customer = require('../models/Customer')


const getAllCustomers = asyncHandler(async(req, res) => {
    const customers = await Customer.find();
    res.status(200).json(customers);
  });


const getCustomerByID = asyncHandler(async(req,res) => {
    const customers = await Customer.findById();
    res.status(200).json(customers)
})

const postCustomer = asyncHandler(async (req, res) => {
  const customers = new Customer(req.body)
  const created = await customers.save
  res.status(201).json(created);
  });

  const updateCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      res.status(400).json({ message: `Customer not found` });
    }
    const updateSchema = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateSchema);
  });

  const deleteCustomer = asyncHandler(async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      res.status(400).json({ message: `Customernot found` });
    }
  
    await customer.remove();
  
    res.status(204).json({ id: req.params.id });
  });

  module.exports = {
    getAllCustomers, getCustomerByID, postCustomer, updateCustomer, deleteCustomer
}