const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  shopId: {
    type: String,
  },
  shopName: {
    type: String,
    required: true,
  },
  shopType: {
    type: String,
    enum: ["apparel", "food", "service"],
    required: true,
  },
  shopZone: {
    type: String,
    enum: ["zone 1", "zone 2", "zone 3"],
    required: true,
  },
  shopOwner: {
    type: String,
    required: true,
  },
  shopContact: {
    type: String,
    maxlength: 11,
    minlength: 11,
    required: true,
  },
});

const Venue = mongoose.model("Venue", venueSchema);
module.exports = Venue;
