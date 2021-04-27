const mongoose = require('mongoose');

const SkillSchema = require("../db/schemas/skill_schema");

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;