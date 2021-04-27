const { Schema } = require('mongoose');

const SkillSchema = new Schema(
    {
        name: {
            type: String
        },
        level: { type: Number },
        description: { type: Object }
    }
)

module.exports = SkillSchema;