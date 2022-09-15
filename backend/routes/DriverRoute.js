const express = require('express');
const router = express.Router();
const {
  getDriver,
  getDriverByID,
  setDriver,
  updateDriver,
  deleteDriver,
} = require('../controller/DriverController');

router.route('/').get(getDriver).post(setDriver);
router
  .route('/:id')
  .delete(deleteDriver)
  .put(updateDriver)
  .get(getDriverByID);

module.exports = router;