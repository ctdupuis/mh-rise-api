const express = require("express");
const router = express.Router(); 

const WeaponCtrl = require('../controllers/weapons_ctrl')

const weapons = [
    { id: 1, name: 'Switch Axe' },
    { id: 2, name: 'Bow' },
    { id: 3, name: 'Hammer' },
    { id: 4, name: 'Sword and Shield'},
    { id: 5, name: 'Insect Glaive' },
];

  
router.get('v1/weapon/:id', WeaponCtrl.getWeaponById)
router.get('v1/weapons', WeaponCtrl.getWeapons)


module.exports = weapons;