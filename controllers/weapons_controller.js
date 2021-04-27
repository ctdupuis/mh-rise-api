const Weapon = require('../models/weapon_model');

getWeapons = async(req, res) => {
    try {
        const weapons = await Weapon.find();
        res.status(200).send(weapons);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

getWeaponById = async (req, res) => {
    const weapon = Weapon.find(w => w.id === parseInt(req.params.weapon_id))
    res.send(weapon)
}

getWeaponsByType = async (req, res) => {
    const weapons = await Weapon.find({ damage_type: req.params.type}, 'name damage_type')
    res.send(weapons)
}

module.exports = {
    getWeapons,
    getWeaponById,
    getWeaponsByType
}