const Weapon = require('../models/weapon_model');

const weapons = [
    { id: 1, name: 'Switch Axe' },
    { id: 2, name: 'Bow' },
    { id: 3, name: 'Hammer' },
    { id: 4, name: 'Sword and Shield'},
    { id: 5, name: 'Insect Glaive' },
];

getWeaponById = async (req, res) => {
    // await Weapon.findOne({ _id: req.params.id }, (err, weapon) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }

    //     if (!weapon) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Weapon not found` })
    //     }
    //     return res.status(200).json({ success: true, data: weapon })
    // }).catch(err => console.log(err))
    const weapon = weapons.find(w => w.id === parseInt(req.params.id))
    res.send(weapon)
}

getWeapons = async (req, res) => {
    // await Weapon.find({}, (err, weapons) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     if (!weapons.length) {
    //         return res
    //             .status(404)
    //             .json({ success: false, error: `Weapon not found` })
    //     }
    //     return res.status(200).json({ success: true, data: weapons })
    // }).catch(err => console.log(err))
    res.send(weapons)
}

module.exports = {
    getWeapons,
    getWeaponById
}