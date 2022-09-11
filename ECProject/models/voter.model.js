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

  voterAddress: {
    type: String,
    required: true,
  },
  voterImage: {
    type: String,
    required: true,
  },
  voteStatus: {
    status: {
      type: Boolean,
      default: false,
    },
    voteDate: Date,
  },
  voterPin: {
    type: String,
    required: true,
    maxlength: 7,
    minlength: 4,
    validate: {
      validator: function (val) {
        if (val>this.maxlength || val<this.minlength) {
          return false;
        }
        return true;
      },
    },
  },
  centerId: {
    type: mongoose.Types.ObjectId,
  },
});

const Voter = mongoose.model("Voter", voterSchema);
module.exports = Voter;
