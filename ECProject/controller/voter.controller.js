const Voter = require("../models/voter.model");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const Email = require("../utils/email");
const multer = require("multer");
const { Types } = require("mongoose");
const bcrypt = require("bcryptjs");

function genToken(user) {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "10m",
    }
  );
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "ECProject/public/img/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
exports.upImage = upload.single("voterImage");

exports.createVoter = async (req, res, next) => {
  console.log(req.file);
  const newVoter = await Voter.create({
    ...req.body,
    voterImage: `img/${req.file.originalname}`,
    centerId: Types.ObjectId(req.body.centerId),
  });
  res.status(200).json(newVoter);
};

exports.getAllVoters = async (req, res, next) => {
  const getAllVoters = await Voter.find();
  res.status(200).json(getAllVoters);
};

exports.getOneVoter = async (req, res, next) => {
  const getOneVoter = await Voter.findbyId(req.params.id);
  res.status(200).json(getOneVoter);
};

exports.hasVoted = async (req, res, next) => {};

exports.login = async (req, res, next) => {
  const { voterNID, email } = req.body;

  //finding user

  const voterFound = await Voter.findOne({ voterNID: voterNID });

  if (!voterFound) {
    return res.status(404).json({ status: "error", message: "wrong NID" });
  }

  const OTP = Math.floor(10000 + Math.random() * 90000).toString();
  const otpHash = await bcrypt.hash(OTP, 10);
  voterFound.otpHash = otpHash;

  await voterFound.save();

  const subject = "Vote OTP";
  await new Email(email).send(OTP, subject);
  res.status(200).json({ status: "success", data: { voterNID } });
};

exports.otpVerify = async (req, res, next) => {
  const { voterNID, OTP } = req.body;

  const voterFound = await Voter.findOne({ voterNID: voterNID });

  if (!voterFound) {
    return res.status(404).json({ status: "error", message: "wrong NID" });
  }

  if (!(await bcrypt.compare(OTP, voterFound.otpHash))) {
    return res
      .status(403)
      .json({ status: "error", message: "ghapla ase kothao" });
  }

  const token = genToken(voterFound);
  res.status(200).json({ status: "success", token, userData: voterFound });
};
