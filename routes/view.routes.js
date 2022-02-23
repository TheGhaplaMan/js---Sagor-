const express = require("express");
const viewController = require("../controller/view.controller");

const router = express.Router();

router.get("/", viewController.homePage);
router.get("/newShop", viewController.newShop);
router.get("/shops", viewController.shopList);
router.get("/updateshop/:id", viewController.updateShop);

//for users
router.get("/login", viewController.login);
router.get("/signup", viewController.signup);

module.exports = router;
