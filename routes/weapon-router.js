const express = require("express");
const router = express.Router(); 

const weapons = [
    { id: 1, name: 'Switch Axe' },
    { id: 2, name: 'Bow' },
    { id: 3, name: 'Hammer' },
    { id: 4, name: 'Sword and Shield'},
    { id: 5, name: 'Insect Glaive' },
];
  
router.get('/', (req, res) => {
    res.send(weapons);
})

router.get('/:id', (req, res) => {
    const weapon = weapons.find(w => w.id === parseInt(req.params.id))
    if (!weapon) return res.status(404).send("The musician with the given id was not found.")
    res.send(weapon);
});

module.exports = weapons;