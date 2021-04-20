const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Weapon = new Schema(
    {
        name: { type: String, required: true },
        damage_type: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('weapons', Weapon)