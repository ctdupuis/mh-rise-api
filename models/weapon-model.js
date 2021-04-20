const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Weapon = new Schema(
    {
        name: { type: String, required: true },
        damage_type: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('weapons', Weapon)