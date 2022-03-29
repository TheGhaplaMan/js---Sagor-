const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  voterName: {
    type: String,
    required: true,
  },
  voterNID: {
    type: String,
    required: true,
  },
  voterContact: {
    type: String,
    required: true,
    maxlength: 14,
    minlength: 11,
    validate: {
      validator: function (val) {
        if (!val.startsWith("01")) {
          return false;
        }
        return true;
      },
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: function (val) {
        if (val.includes("@") && val.includes(".")) {
          return true;
        }
        return false;
      },
    },
  },
  voterDOB: {
    type: Date,
    required: true,
  },
  voterAddress: {
    thana: String,
    district: String,
    zip: Number,
    division: String,
  },
  voterImage: {
    type: String,
    required: true,
  },
  voteStatus: {
    status: {
      type: Boolean,
      required: true,
    },
    voteDate: Date,
  },
  otpHash: String,
  centerId: {
    type: mongoose.Types.ObjectId,
  },
});

const Voter = mongoose.model("Voter", voterSchema);
module.exports = Voter;
