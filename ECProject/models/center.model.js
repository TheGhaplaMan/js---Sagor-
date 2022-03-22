const mongoose = require("mongoose");

const centerSchema = mongoose.Schema({
  candidates: [
    {
      candidateName: String,
      voteReceived: Number,
    },
  ],
  totalVote: Number,
  adminId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Center = mongoose.model("Center", centerSchema);
module.exports = Center;
