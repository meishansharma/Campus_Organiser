const mongoose = require('mongoose')

const checkupSchema = new mongoose.Schema({
    age: Number,
    symptoms: String,
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

const Checkup = new mongoose.model('Checkup', checkupSchema)

module.exports = Checkup