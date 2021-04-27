const { Schema } = require('mongoose');

const SkillSchema = new Schema(
    {
        name: {
            type: String
        },
        level: { type: Number },
        description: { type: Object },
        slug: { type: String }
    }
)

module.exports = SkillSchema;