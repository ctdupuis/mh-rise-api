const express = require("express");
const router = express.Router(); 

const {
    getWeapons,
    getWeaponById
} = require("../controllers/weapons_controller");


router.get("/", getWeapons);
router.get("/:weapon_id", getWeaponById);


module.exports = router;