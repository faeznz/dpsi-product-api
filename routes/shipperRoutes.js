var express = require('express');
var shipperController = require('../controllers/shipperController');

var router = express.Router();

router.post('/', shipperController.createShipper);
router.get('/', shipperController.getShippers);
router.get('/:id', shipperController.getShipperById);
router.put('/:id', shipperController.updateShipper);
router.delete('/:id', shipperController.deleteShipper);

module.exports = router;
