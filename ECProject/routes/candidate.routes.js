const express = require("express");
const candidateController = require("../controller/candidate.controller");

const router = express.Router();

router.post("/new-candidate", candidateController.createCandidate);
router.get("/", candidateController.getCandidates);
router.get("/:candidateId", candidateController.getOneCandidate);
// router.get("/:centerId/qrCode", centerController.candidateQR);

module.exports = router;
