const { Schema } = require('mongoose')

const WeaponSchema = new Schema(
    {
        damage_type: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = WeaponSchema;