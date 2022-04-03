const mongoose = require("mongoose");

const centerSchema = mongoose.Schema({
  centerName: {
    type: String,
    required: true,
  },
  candidates: [
    {
      candidateName: String,
      voteReceived: {
        type: Number,
        default: 0,
      },
      candidateQR: {
        type: String,
        default: null,
      },
    },
  ],
  totalVote: {
    type: Number,
    default: 0,
  },
});

const Center = mongoose.model("Center", centerSchema);
module.exports = Center;
