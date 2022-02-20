const express = require("express");
const viewController = require("../controller/view.controller");

const router = express.Router();

router.get("/", viewController.homePage);
router.get("/newShop", viewController.newShop);
router.get("/shops", viewController.shopList);
router.get("/updateshop/:id", viewController.updateShop);

module.exports = router;
