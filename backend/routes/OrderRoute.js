const express = require('express');
const router = express.Router();
const {
  getOrder,
  getOrderByID,
  setOrder,
  updateOrder,
  deleteOrder,
} = require('../controller/orderController');

router.route('/').get(getOrder).post(setOrder);
router
  .route('/:id')
  .delete(deleteOrder)
  .put(updateOrder)
  .get(getOrderByID);

module.exports = router;