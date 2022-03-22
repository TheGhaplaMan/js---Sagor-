const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUser);
router.get("/:id", userController.getOneUser);
router.patch("/:id", userController.updateOne);
router.delete("/:id", userController.dltOne);
router.post("/login", userController.login);
router.post("/signup", userController.signUp);

module.exports = router;
