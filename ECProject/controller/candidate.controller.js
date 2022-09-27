const Candidates = require("../models/candidate.model");
const { promisify } = require("util");
const qrCode = require("qrcode");

exports.createCandidate = async (req, res, next) => {
  const newCandidate = await Candidates.create(req.body);

  // let qrGen; // callback function dia
  // QRCode.toDataURL("I am a pony!", function (err, url) {
  //   console.log(url);
  //   qrGen = url;
  // });

  //promise use koira
  const qrGen = await promisify(qrCode.toDataURL)(
    newCandidate._id.toString()
    // newCandidate.candidateName
  );
  newCandidate.candidateQR = qrGen;

  // for (const candidate of newCandidate.majorCandidates) {
  const candidateQRGen = await promisify(qrCode.toDataURL)(
    newCandidate._id.toString()
    // candidate.candidateName
  );
  newCandidate.candidateQR = candidateQRGen;
  // }

  newCandidate.markModified("candidateQR");
  const updateCandidate = await newCandidate.save();

  res.status(201).json(updateCandidate);
};

exports.getCandidates = async (req, res, next) => {
  const getCandidates = await Candidates.find();
  res.status(200).json(getCandidates);
};

exports.getOneCandidate = async (req, res, next) => {
  const getOneCandidate = await Candidates.findById(req.params.candidateId);
  res.status(200).json(getOneCandidate);
};

// exports.updateCenterInfo = async (req, res, next) => {
//   console.log("paisi sob", req.body);
//   const updateCenterInfo = await Center.findOneAndUpdate(
//     {
//       centerId: req.params.id,
//     },
//     req.body
//   );
//   res.status(200).json(updateCenterInfo);
// };

exports.confirmVote = async (req, res, next) => {
  const candidate = await Candidates.findById(req.params.candidateId);

  candidate.voteReceived = candidate.voteReceived++;

  await candidate.save();

  res.status(200).json({ status: "success", message: "Vote confirmed" });
};
