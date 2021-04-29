const express = require('express');
const router = express.Router();

const {
    getDecos,
    getDecoBySlug
} = require("../controllers/decorations_controller");

router.get("/", getDecos)
router.get("/:slug", getDecoBySlug)

module.exports = router;