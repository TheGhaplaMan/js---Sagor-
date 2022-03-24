const mongoose = require("mongoose");

const centerSchema = mongoose.Schema({
  candidates: [
    {
      candidateName: String,
      voteReceived: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalVote: {
    type: Number,
  },
});

const Center = mongoose.model("Center", centerSchema);
module.exports = Center;
