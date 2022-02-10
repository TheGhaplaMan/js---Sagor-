const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema ({
    shopid : {
        type : String,
        required : true
    },
    shopType : {
        type : String,
    },
    shopOwner : {
        type : String,
        required : true,
    },
    shopContact : {
        type : Number.toString,
        maxlength: 11,
        required : true,
    }
})

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;