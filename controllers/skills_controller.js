const Skill = require('../models/skill_model');

getSkills = async(req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).send(skills)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

getSkillBySlug = async(req, res) => {
    try {
        const skill = await Skill.find({ slug: req.params.slug });
        res.status(200).send(skill)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getSkills,
    getSkillBySlug
}