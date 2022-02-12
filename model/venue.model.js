const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema ({
    shopId : {
        type : String,
    },
    shopType : {
        type : String,
        enum : ['apparel' , 'food', 'service'],
    },
    shopOwner : {
        type : String,
        required : true,
    },
    shopContact : {
        type : String,
        maxlength: 11,
        minlength : 11,
        required : true,
    }
})

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;