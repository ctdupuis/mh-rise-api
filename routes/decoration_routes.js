const express = require('express');
const router = express.Router();

const {
    getDecos
} = require("../controllers/decorations_controller");

router.get("/", getDecos)

module.exports = router;