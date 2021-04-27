const express = require("express");
const router = express.Router();

const {
    getSkills, 
    getSkillBySlug
} = require("../controllers/skills_controller");

router.get("/", getSkills)
router.get("/:slug", getSkillBySlug)

module.exports = router;