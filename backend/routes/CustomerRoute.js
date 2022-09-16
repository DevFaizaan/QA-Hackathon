const express = require('express');
const router = express.Router();
const {
  getAllCustomers,
  getCustomerByID,
  postCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/CustomerController');

router.route('/').get(getAllCustomers).post(postCustomer);
router
  .route('/:id')
  .delete(deleteCustomer)
  .put(updateCustomer)
  .get(getCustomerByID);

module.exports = router;