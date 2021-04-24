const { Schema } = require('mongoose')

const Weapon = new Schema(
    {
        rarity: {
            type: Integer,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = WeaponSchema;