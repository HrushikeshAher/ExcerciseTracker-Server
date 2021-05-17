const mongoose = require("mongoose")


const excerciseSchema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, require: true },
    duration: { type: Number, require: true },
    date: { type: Date, require: true },
},
    {
        timestamps: true
    })


const excercise = mongoose.model('excercise', excerciseSchema)

module.exports = excercise