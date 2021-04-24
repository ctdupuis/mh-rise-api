const express = require("express");
const router = express.Router(); 

const {
    getWeapons,
    getWeaponById
} = require("../controllers/weapons_ctrl");


router.get('/weapons', getWeapons)
router.get('/weapon/:id', getWeaponById)


module.exports = router