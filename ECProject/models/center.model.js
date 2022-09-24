const mongoose = require("mongoose");

const centerSchema = mongoose.Schema({
  centerName: {
    type: String,
    required: true,
  },
  totalVote: {
    type: Number,
    default: 0,
  },
});

const Center = mongoose.model("Center", centerSchema);

module.exports = Center;
