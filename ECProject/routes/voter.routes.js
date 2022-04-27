const express = require("express");
const voterController = require("../controller/voter.controller");

const router = express.Router();

router.post("/new-voter", voterController.upImage, voterController.createVoter);

router.get("/:centerId", voterController.getVotersInCenter);
router.post(
  "/verify-voter",
  voterController.protect,
  voterController.verifyVoter
);

router.post("/login", voterController.login);
router.post("/otp-verify", voterController.otpVerify);

router.post("/vote", voterController.protect, voterController.hasVoted);

module.exports = router;
