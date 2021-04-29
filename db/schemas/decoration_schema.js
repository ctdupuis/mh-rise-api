const { Schema } = require('mongoose');

const DecorationSchema = new Schema(
    {
        name: { type: String },
        level: { type: Number },
        skill: { 
            type: Schema.Types.ObjectId,
            ref: "Skill"
        }
    }
)

module.exports = DecorationSchema;