const { Schema } = require('mongoose');

const SkillSchema = require("./skill_schema");

const DecorationSchema = new Schema(
    {
        name: { type: String },
        level: { type: Number },
        skill: { type: [SkillSchema] }
    }
)

module.exports = DecorationSchema;