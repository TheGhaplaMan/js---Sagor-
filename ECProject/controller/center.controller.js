const Center = require("../models/center.model");
const { promisify } = require("util");
const qrCode = require("qrcode");

exports.createCenter = async (req, res, next) => {
  const newCenter = await Center.create(req.body);

  // let qrGen; // callback function dia
  // QRCode.toDataURL("I am a pony!", function (err, url) {
  //   console.log(url);
  //   qrGen = url;
  // });

  //promise use koira
  const qrGen = await promisify(qrCode.toDataURL)(newCenter._id.toString());
  newCenter.centerQR = qrGen;

  for (const candidate of newCenter.candidates) {
    const candidateQRGen = await promisify(qrCode.toDataURL)(
      candidate._id.toString()
    );
    candidate.candidateQR = candidateQRGen;
  }

  newCenter.markModified("candidates");
  const upDatedCenter = await newCenter.save();

  res.status(201).json(upDatedCenter);
};

exports.getAllCenter = async (req, res, next) => {
  const getAllCenter = await Center.find();
  res.status(200).json(getAllCenter);
};

exports.getOneCenter = async (req, res, next) => {
  const getCenter = await Center.findById(req.params.centerId);
  res.status(200).json(getCenter);
};

exports.updateCenterInfo = async (req, res, next) => {
  console.log("paisi sob", req.body);
  const updateCenterInfo = await Center.findOneAndUpdate(
    {
      centerId: req.params.id,
    },
    req.body
  );
  res.status(200).json(updateCenterInfo);
};

exports.dltCenter = async (req, res, next) => {
  const dltCenter = await Center.findOneAndDelete({
    centerId: req.params.centerId,
  });
  res.status(200).json(dltCenter);
};

exports.centerResult = async (req, res, next) => {
  const centerResult = await Center.findById(req.params.centerId);
  res.status(200).json(centerResult);
};

exports.candidateQR = async (req, res, next) => {};
