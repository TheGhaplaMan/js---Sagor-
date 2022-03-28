const express = require("express");
const voterController = require("../controller/voter.controller");

const router = express.Router();

router.get("/", voterController.getAllVoters);
router.get("/:id", voterController.getOneVoter);
router.post("/newVoter", voterController.upImage, voterController.createVoter);
router.post("/login", voterController.login);
router.patch("/:id", voterController.hasVoted);

module.exports = router;
