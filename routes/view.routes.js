const express = require("express");
const viewController = require("../controller/view.controller");
const userController = require("../controller/user.controller");

const router = express.Router();

router.get("/", viewController.homePage);
router.get("/newShop", userController.protectView, viewController.newShop);
router.get("/shops", userController.protectView, viewController.shopList);
router.get(
  "/updateshop/:id",
  userController.protectView,
  viewController.updateShop
);

//for users
router.get("/login", viewController.login);
router.get("/signup", viewController.signup);

module.exports = router;
