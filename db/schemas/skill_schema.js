const { Schema } = require('mongoose');

const SkillSchema = new Schema(
    {
        name: {
            type: String
        },
        level: { type: Number },
        description: { type: Object },
        slug: { type: String },
        decoration: { 
            type: Schema.Types.ObjectId,
            ref: "Decoration" 
        }
    }
)

module.exports = SkillSchema;