const bcrypt = require("bcryptjs");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

function genToken(user) {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1m",
    }
  );
}

exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

exports.getAllUser = async (req, res, next) => {
  const getUsers = await User.find();
  res.status(200).json(getUsers);
};

exports.getOneUser = async (req, res, next) => {
  const getOne = await User.findById(req.params.id); //dynamic api
  res.status(200).json(getOne);
};

exports.updateOne = async (req, res, next) => {
  const updateOne = await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updateOne);
};

exports.dltOne = async (req, res, next) => {
  const dltOne = await User.findByIdAndDelete(req.params.id); //dynamic api
  res.status(200).json(dltOne);
};

exports.signUp = async (req, res, next) => {
  const { userName, email, pass, userContact } = req.body;
  //finding user
  let founduser = await User.findOne({
    $or: [{ userName: userName }, { email: email }],
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

  res.status(200).json({ status: "success", message: "Done. Login now." });
};

exports.login = async (req, res, next) => {
  const { userName, pass } = req.body;

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
  res.status(200).json({ status: "success", token, userData: userFound });
};
