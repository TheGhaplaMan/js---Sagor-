const bcrypt = require("bcryptjs");
const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const Email = require("../utils/email");
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
  const { email, centerId, pass } = req.body;
  //finding user
  let founduser = await Admin.findOne({
    $or: [{ centerId: Types.ObjectId(centerId) }, { email: email }],
  });
  if (founduser) {
    return res
      .status(403)
      .json({ status: "error", message: "Already ase bhai" });
  }

  const passHash = await bcrypt.hash(pass, 12);

  const newAdmin = await Admin.create({ ...req.body, pass: passHash });

  // await new Email(newAdmin).send("welcome", "The Subject Lol");
  res
    .status(200)
    .json({ status: "success", message: "Done. Login now.", data: newAdmin });
};

exports.login = async (req, res, next) => {
  const { email, pass } = req.body;

  //finding user

  let adminFound = await Admin.findOne({ email: email });

  if (!adminFound) {
    return res.status(404).json({ status: "error", message: "User nai" });
  }

  if (!(await bcrypt.compare(pass, adminFound.pass))) {
    return res
      .status(403)
      .json({ status: "error", message: "ghapla ase kothao" });
  }
  adminFound.pass = undefined;
  const token = genToken(adminFound);

  res.status(200).json({ status: "success", token, userData: adminFound });
};

model.exports = Admin;
