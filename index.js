// const Joi = require('joi');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const weapons = [
    { id: 1, name: 'Switch Axe' },
    { id: 2, name: 'Bow' },
    { id: 3, name: 'Hammer' },
    { id: 4, name: 'Sword and Shield'},
    { id: 5, name: 'Insect Glaive' },
  ];

app.get('/', (req, res) => {
  res.send('Hello! Server is running successfully');
});

app.get('/v1/weapons', (req, res) => {
  res.send(weapons);
})

app.get('/v1/weapons/:id', (req, res) => {
    const weapon = weapons.find(w => w.id === parseInt(req.params.id))
    if (!weapon) return res.status(404).send("The musician with the given id was not found.")
    res.send(weapon);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));