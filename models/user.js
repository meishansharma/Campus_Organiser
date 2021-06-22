const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('../../CollegeManager-main/models/User');

const UserSchema = new mongoose.Schema({
    name:String,
    username: String,
    password: String,
    role: String,
    vaccine:{
        type:String,
        default: 'no'
    },
    college: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "College"
        },

        name: String
    }
}, {
    timestamps: true
})

UserSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel