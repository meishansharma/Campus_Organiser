const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    hostel: String,
    mobileNo: Number,
    from: String,
    item: String,
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

const Order = new mongoose.model('Order', orderSchema)

module.exports = Order