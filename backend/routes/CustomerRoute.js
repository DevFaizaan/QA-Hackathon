const express = require('express');
const router = express.Router();
const {
  getCustomer,
  getCustomeByID,
  setCustome,
  updateCustomer,
  deleteCustomer,
} = require('../controller/bookingController');

router.route('/').get(getBookings).post(setBooking);
router
  .route('/:id')
  .delete(deleteBooking)
  .put(updateBooking)
  .get(getBookingsByID);
router.route('/:movie/:name').get(getByMovieAndName);

module.exports = router;