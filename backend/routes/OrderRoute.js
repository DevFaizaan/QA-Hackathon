const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderByID,
  postOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

router.route('/').get(getAllOrders).post(postOrder);
router
  .route('/:id')
  .delete(deleteOrder)
  .put(updateOrder)
  .get(getOrderByID);

module.exports = router;