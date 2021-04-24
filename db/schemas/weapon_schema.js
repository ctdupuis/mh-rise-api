const { Schema } = require('mongoose')

const WeaponSchema = new Schema(
    {
        rarity: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = WeaponSchema;