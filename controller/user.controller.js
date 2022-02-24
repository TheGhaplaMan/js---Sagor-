const User = require("../model/user.model");

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
  const { userName, pass } = req.body;
  //finding user
  let founduser = await User.findOne({ userName: userName });
  if (founduser) {
    return res(403).json("Already ase bhai");
  }
};

exports.login = async (req, res, next) => {};
