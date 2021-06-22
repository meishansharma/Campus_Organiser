const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        username: String
    }
}, {
    timestamps: true
});

const projectModule = mongoose.model("Project",projectSchema)

module.exports = projectModule