const mongoose = require('mongoose')

const arrivalSchema = new mongoose.Schema({
    branch: String,
    arrivalDate: Date,
    hostel: String,
    mobileNo: Number,
    status: {
        type: String,
        default: 'pending'
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String
    }
})

const Arrival = mongoose.model('Arrival', arrivalSchema)

module.exports = Arrival