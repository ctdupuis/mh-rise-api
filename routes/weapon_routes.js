const express = require("express");
const router = express.Router(); 

const {
    getWeapons,
    getWeaponById,
    getWeaponsByType
} = require("../controllers/weapons_controller");


router.get("/", getWeapons);
router.get("/:weapon_id", getWeaponById);
router.get("/type/:type", getWeaponsByType)


module.exports = router;