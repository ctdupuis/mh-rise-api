const Weapon = require('../models/weapon_model');

// const weapons = [
//     { id: 1, name: 'Switch Axe' },
//     { id: 2, name: 'Bow' },
//     { id: 3, name: 'Hammer' },
//     { id: 4, name: 'Sword and Shield'},
//     { id: 5, name: 'Insect Glaive' },
// ];

getWeapons = async(req, res) => {
    try {
        const weapons = await Weapon.find();
        res.status(200).send(weapons);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

getWeaponById = async (req, res) => {
    const weapon = weapons.find(w => w.id === parseInt(req.params.weapon_id))
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