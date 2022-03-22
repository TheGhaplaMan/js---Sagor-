const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
  pass: {
    type: String,
    required: true,
  },
  totalVoter: Number,
  centerId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  votedAlready: {
    type: Number,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
