const Weapon = require('../models/weapon_model');

getWeaponById = async (req, res) => {
    await Weapon.findOne({ _id: req.params.id }, (err, weapon) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!weapon) {
            return res
                .status(404)
                .json({ success: false, error: `Weapon not found` })
        }
        return res.status(200).json({ success: true, data: weapon })
    }).catch(err => console.log(err))
}

getWeapons = async (req, res) => {
    await Weapon.find({}, (err, weapons) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!weapons.length) {
            return res
                .status(404)
                .json({ success: false, error: `Weapon not found` })
        }
        return res.status(200).json({ success: true, data: weapons })
    }).catch(err => console.log(err))
}

module.exports = {
    getWeapons,
    getWeaponById
}