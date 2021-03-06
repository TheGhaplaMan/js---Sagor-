const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
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
  pass: {
    type: String,
    required: true,
  },
  adminQR: String,
  roomNumber: {
    type: Number,
    required: true,
  },
  totalVoter: Number,
  centerId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  votedAlready: {
    type: Number,
    default: 0,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
