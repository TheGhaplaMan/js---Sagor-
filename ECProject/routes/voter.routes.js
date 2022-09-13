const express = require("express");
const voterController = require("../controller/voter.controller");

const router = express.Router();

router.post("/new-voter", voterController.upImage, voterController.createVoter);
router.post("/login", voterController.login);

// router.get("/:centerId", voterController.getVotersInCenter);
router.get("/profile/:voterId", voterController.getOneVoter);

router.post(
  "/verify-voter",
  voterController.protect,
  voterController.verifyVoter
);

router.post("/otp-verify", voterController.otpVerify);

router.post("/vote", voterController.protect, voterController.hasVoted);

module.exports = router;
