const express = require('express');
const router = express.Router();
const {
  getAllDrivers,
  getDriverByID,
  postDriver,
  updateDriver,
  deleteDriver,
} = require('../controllers/DriverController');

router.route('/').get(getAllDrivers).post(postDriver);
router
  .route('/:id')
  .delete(deleteDriver)
  .put(updateDriver)
  .get(getDriverByID);

module.exports = router;