const express = require ('express')
const venueController = require('../controller/venue.controller')

const router = express.Router();

router.post('/', venueController.createShop);
router.get('/', venueController.getAllShop);
router.get('/:id', venueController.getOneShop);
router.patch('/:id', venueController.updateShopInfo);
router.delete('/:id', venueController.dltShop);

module.exports = router;