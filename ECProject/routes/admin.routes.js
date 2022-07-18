const express = require("express");
const adminController = require("../controller/admin.controller");

const router = express.Router();

router.post("/new-admin", adminController.protect, adminController.createAdmin);
router.post("/login", adminController.login);

router.get("/all-admins", adminController.protect, adminController.getAdminsss);
router.get("/:adminId", adminController.protect, adminController.getAdmin);

module.exports = router;
