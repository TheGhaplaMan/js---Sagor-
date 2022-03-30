const express = require("express");
const centerController = require("../controller/center.controller");

const router = express.Router();

router.post("/new-center", centerController.createCenter);
router.get("/", centerController.getAllCenter);
router.get("/:centerId", centerController.getOneCenter);
router.get("/:centerId/results", centerController.centerResult);
router.get("/:centerId/qrCode", centerController.candidateQR);

router.patch("/:centerId", centerController.updateCenterInfo);
router.delete("/:id", centerController.dltCenter);

module.exports = router;
