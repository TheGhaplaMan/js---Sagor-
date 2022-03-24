const bcrypt = require("bcryptjs");
const User = require("../model/voter.model");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { cookie } = require("express/lib/response");
const Email = require("../utils/email");

function genToken(user) {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3m",
    }
  );
}

exports.createUser = async (req, res, next) => {
  const { email, pass, userName, cent } = req.body;
  //finding user
  let founduser = await User.findOne({
    $or: [{ centerId: userName }, { email: email }],
  });
  if (founduser) {
    return res
      .status(403)
      .json({ status: "error", message: "Already ase bhai" });
  }

  const passHash = await bcrypt.hash(pass, 12);

  const newUser = await User.create({
    userName: userName,
    email: email,
    userContact: userContact,
    pass: passHash,
  });

  await new Email(newUser).send("welcome", "The Subject Lol");
  res.status(200).json({ status: "success", message: "Done. Login now." });
};

exports.login = async (req, req, next) => {
  const { email, pass } = req.body;

  //finding user

  let userFound = await User.findOne({ userName: userName });

  if (!userFound) {
    return res.status(404).json({ status: "error", message: "User nai" });
  }

  if (!(await bcrypt.compare(pass, userFound.pass))) {
    return res
      .status(403)
      .json({ status: "error", message: "ghapla ase kothao" });
  }
  userFound.pass = undefined;
  const token = genToken(userFound);

  res.cookie("jwt", token, {
    httpOnly: true,
  });
  res.status(200).json({ status: "success", token, userData: userFound });
};
