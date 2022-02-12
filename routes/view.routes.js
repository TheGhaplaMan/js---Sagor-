const express = require ('express')
const viewController = require('../controller/view.controller')

const router = express.Router();

router.get ('/', viewController.homePage);
router.get('/about', viewController.aboutPage);

module.exports = router;
