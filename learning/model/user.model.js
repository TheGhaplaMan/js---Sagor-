const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ticketId: {
    type: String,
  },
  ticketOwned: {
    type: Boolean,
    default: false,
    validate: {
      validator: function (val) {
        if (val != true) {
          return "Not Found";
        }
      },
    },
  },
  userName: {
    type: String,
    required: true,
  },
  userContact: {
    type: String,
    required: true,
    maxlength: 11,
    minlength: 11,
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
  entryAt: {
    type: Date,
  },
  pass: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
