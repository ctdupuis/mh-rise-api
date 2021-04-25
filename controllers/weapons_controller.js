const Weapon = require('../models/weapon_model');

const weapons = [
    { id: 1, name: 'Switch Axe' },
    { id: 2, name: 'Bow' },
    { id: 3, name: 'Hammer' },
    { id: 4, name: 'Sword and Shield'},
    { id: 5, name: 'Insect Glaive' },
];

module.exports = {
    getWeapons: (req, res) => {
        res.send(weapons)
    },
    getWeaponById: async (req, res) => {
        const weapon = weapons.find(w => w.id === parseInt(req.params.weapon_id))
        res.send(weapon)
    }
}