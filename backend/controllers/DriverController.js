const asyncHandler = require('express-async-handler')
const Driver = require('../models/Driver')


const getAllDrivers = asyncHandler(async(req, res) => {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  });


const getDriverByID = asyncHandler(async(req,res) => {
    const drivers = await Driver.findById();
    res.status(200).json(drivers)
})

const postDriver = asyncHandler(async (req, res) => {
  const driver = new Driver(req.body)
  const created = await driver.save
  res.status(201).json(created);
  });

  const updateDriver = asyncHandler(async (req, res) => {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      res.status(400).json({ message: `Driver not found` });
    }
    const updateSchema = await Driver.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateSchema);
  });

  const deleteDriver = asyncHandler(async (req, res) => {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      res.status(400).json({ message: `Driver not found` });
    }
  
    await driver.remove();
  
    res.status(204).json({ id: req.params.id });
  });

  module.exports = {
    getAllDrivers, getDriverByID, postDriver, updateDriver, deleteDriver
}