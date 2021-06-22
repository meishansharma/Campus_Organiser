const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
    name:String,
    status:{
        type: String,
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

const HostelModule = mongoose.model("Hostel", HostelSchema);
module.exports = HostelModule