const express = require("express");
const centerController = require("../controller/center.controller");

const router = express.Router();

router.post("/newCenter", centerController.createCenter);
router.get("/centers", centerController.getAllCenter);
router.patch("/:centerId", centerController.updateCenterInfo);
router.delete("/:id", centerController.dltCenter);

module.exports = router;
