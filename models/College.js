const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const CollegeModel =  mongoose.model("College", CollegeSchema)

module.exports = CollegeModel