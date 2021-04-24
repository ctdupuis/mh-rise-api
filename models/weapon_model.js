const mongoose = require('mongoose')

const WeaponSchema = require("../db/schemas/weapon_schema");

const Weapon = mongoose.model("Weapon", WeaponSchema)

module.exports = Weapon;