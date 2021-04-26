const { Schema } = require('mongoose')

const WeaponSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        damage_type: {
            type: String,
            required: true
        }
    }
)

module.exports = WeaponSchema;