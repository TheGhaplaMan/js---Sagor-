const bcrypt = require("bcryptjs");
const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const Email = require("../utils/email");
const { promisify } = require("util");
const qrCode = require("qrcode");
const { model, Types } = require("mongoose");

function genToken(user) {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
}

exports.createAdmin = async (req, res, next) => {
  const { email, pass, roomNumber, centerId } = req.body;
  //finding user
  let foundAdmin = await Admin.findOne({
    $or: [
      { email: email },
      {
        $and: [
          { roomNumber: roomNumber },
          { centerId: Types.ObjectId(centerId) },
        ],
      },
    ],
  });
  console.log(req.body.roomNumber);
  if (foundAdmin) {
    return res
      .status(403)
      .json({ status: "error", message: "Admin already exists" });
  }

  const passHash = await bcrypt.hash(pass,10);

  const newAdmin = await Admin.create({ ...req.body, pass: passHash });

  const qrGen = await promisify(qrCode.toDataURL)(newAdmin._id.toString());
  newAdmin.adminQR = qrGen;
  const upDatedAdmin = await newAdmin.save();

  // await new Email(newAdmin).send("welcome", "The Subject Lol");
  res.status(200).json({
    status: "success",
    message: "Done. Login now.",
    data: upDatedAdmin,
  });
};

exports.login = async (req, res, next) => {
  const { email, pass } = req.body;

  //finding user

  let adminFound = await Admin.findOne({ email: email });

  if (!adminFound) {
    return res.status(404).json({ status: "error", message: "Not Found" });
  }

  if (!(await bcrypt.compare(pass, adminFound.pass))) {
    return res
      .status(403)
      .json({ status: "error", message: "Wrong Password or Email" });
  }
  adminFound.pass = undefined;
  const token = genToken(adminFound);

  res.status(200).json({ status: "success", token, userData: adminFound });
};

exports.getAdmin = async (req, res, next) => {
  const findAdmin = await Admin.findById(req.params.adminId);
  if (!findAdmin) {
    return res.status(404).json({ status: "Error", message: "Pai naika" });
  }
  return res.status(200).json({ status: "success", findAdmin });
};

exports.getAdminsss = async (req, res, next) => {
  const findAllAdmins = await Admin.find();
  if (findAllAdmins === undefined) console.log("hehe");
  return res.status(200).json({ findAllAdmins });
};
