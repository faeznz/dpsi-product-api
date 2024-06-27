var express = require('express');
var orderDetailController = require('../controllers/orderDetailController');

var router = express.Router();

router.post('/', orderDetailController.createOrderDetail);
router.get('/', orderDetailController.getOrderDetailById);
router.get('/:id', orderDetailController.getOrderDetailById);
router.put('/:id', orderDetailController.updateOrderDetail);
router.delete('/:id', orderDetailController.deleteOrderDetail);

module.exports = router;
