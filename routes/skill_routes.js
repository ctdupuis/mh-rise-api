const express = require("express");
const router = express.Router();

const {
    getSkills
} = require("../controllers/skills_controller");

router.get("/", getSkills)

module.exports = router;