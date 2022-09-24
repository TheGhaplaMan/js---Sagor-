const Voter = require("../models/voter.model");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const Email = require("../utils/email");
const multer = require("multer");
const { Types } = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin.model");
const Center = require("../models/center.model");

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
  const { email, voterContact, voterNID } = req.body;
  //finding user
  let foundVoter = await Voter.findOne({
    $or: [{ email: email, voterContact: voterContact, voterNID: voterNID }],
  });
  if (foundVoter) {
    return res
      .status(403)
      .json({ status: "error", message: "Already ase bhai" });
  }
  console.log("edai", req.body);
  const newVoter = await Voter.create({
    ...req.body,
    voterImage: `img/${req.file.originalname}`,
    centerId: Types.ObjectId(req.body.centerId),
  });
  res
    .status(200)
    .json({ status: "success", data: newVoter, message: "Proceed to login" });
};

exports.getVotersInCenter = async (req, res, next) => {
  const voters = await Voter.find({ centerId: req.params.centerId });
  res.status(200).json({
    status: "success",
    voters,
    message: "All Voters from this Center",
  });
};

//TODO: send res to admin
exports.verifyVoter = async (req, res, next) => {
  const voter = await Voter.findbyId(req.user._id);

  if (req.body.centerId != voter.centerId.toString()) {
    return res
      .status(400)
      .json({ status: "error", message: "Voter is not from this center" });
  }

  if (voter.voteStatus.status == true) {
    return res.status(400).json({
      status: "error",
      message: "Voter has already voted on " + voter.voteStatus.voteDate,
    });
  }

  const admin = await Admin.findOne({ adminId: voter.adminId });

  if (req.body.adminId != voter.adminId.toString()) {
    return res.status(400).json({
      status: "error",
      message: "Incorrect Room. The correct room is " + admin.roomNumber,
    });
  }

  res.status(200).json({
    status: "success",
    data: voter,
    message: "You may proceed to Vote",
  }); //response vul jaygay jaitese
};

exports.login = async (req, res, next) => {
  const { voterNID, voterPin } = req.body;
  // console.log(voterNID, voterPin, "chakkichua")
  //finding user

  const voterFound = await Voter.findOne({
    voterNID: voterNID,
    voterPin: voterPin,
  });

  if (!voterFound) {
    return res
      .status(404)
      .json({ status: "error", message: "wrong NID or Pin" });
  }
  const token = genToken(voterFound);

  res.status(200).json({ status: "success", token, data: voterFound });
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

//TODO: res main jaygay pathano baki
exports.hasVoted = async (req, res, next) => {
  const voterId = req.params.id;
  const Votter = await Voter.findById(voterId);

  const centerId = Votter.centerId;

  const updateVoteStatus = await Voter.findByIdAndUpdate(voterId, {
    voteStatus: {
      status: true,
      voteDate: new Date(Date.now()),
    },
  });
  const C = await Center.findById(centerId);
  C.totalVote = C.totalVote++;
  await C.save();

  res
    .status(200)
    .json({ status: "success", message: "Your Vote has been Confirmed" });
};

exports.getOneVoter = async (req, res, next) => {
  // console.log("HEHE", req.params.voterId)
  const findVoter = await Voter.findById(req.params.voterId);
  // console.log(findVoter)
  if (!findVoter) {
    return res.status(404).json({ status: "Error", message: "mamu nai" });
  }
  return res.status(200).json({
    status: "success",
    findVoter,
    message: "mamu re pailam",
  });
};

exports.protect = async (req, res, next) => {
  //verifying token existence
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "Not logged in yet" });
  }

  //verifying token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //checking user
  const currentUser = await Voter.findById(decoded.id);
  if (!currentUser) {
    return res
      .status(404)
      .json({ status: "error", message: "User Does Not Exist" });
  }

  req.user = currentUser;
  next();
};
