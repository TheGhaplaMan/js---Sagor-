const mongoose = require('mongoose');


const userSchema = new mongoose.Schema ({
    userName : {
        type: String,
        required: true
    },
    contact : {
        type : String,
        required : true,
        maxlength: 11,
        minlength: 11
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        validate :  {
            validator: function(val) {
                if(val.includes("@") && val.includes(".")){
                    return true;
                }
                return false;
            }
        }
    },
    password : String
})

const User = mongoose.model('User', userSchema);
module.exports = User;