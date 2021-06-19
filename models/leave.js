const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    branch: String,
    from: Date,
    to: Date,
    hostel: String,
    mobileNo: Number,
    status: {
        type: String,
        default: 'pending'
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String
    }
})

const Leave = mongoose.model('Leave', leaveSchema)

module.exports = Leave