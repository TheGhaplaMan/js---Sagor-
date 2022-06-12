const express = require("express");
const adminController = require("../controller/admin.controller");

const router = express.Router();

router.post("/new-admin", adminController.createAdmin);
router.post("/login", adminController.login);

router.get("/all-admins", adminController.getAdminsss);
router.get("/:adminId", adminController.getAdmin);

module.exports = router;
