const express = require('express');
const router = express.Router();
const {
  getCustomer,
  getCustomerByID,
  setCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controller/customerController');

router.route('/').get(getCustomer).post(setCustomer);
router
  .route('/:id')
  .delete(deleteCustomer)
  .put(updateCustomer)
  .get(getCustomerByID);

module.exports = router;