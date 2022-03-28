const express = require("express");
const adminController = require("../controller/admin.controller");

const router = express.Router();

router.post("/newAdmin", adminController.createAdmin);
router.post("/login", adminController.login);

module.exports = router;
