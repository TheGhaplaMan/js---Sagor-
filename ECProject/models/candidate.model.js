const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  candidateName: {
    type: String,
    required: true,
  },
  voteReceived: {
    type: Number,
    default: 0,
  },
  candidateQR: {
    type: String,
    default: null,
  },
});

const Candidates = mongoose.model("Candidates", candidateSchema);
module.exports = Candidates;
