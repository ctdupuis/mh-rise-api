const morgan = require('morgan');
const helmet = require('helmet');
// const Joi = require('joi');

const weapnos = require('./routes/weapon-router');
const home = require('./routes/home');


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));    // all of our static assets (css, images, etc) in this public folder
app.use(helmet());
app.use(morgan('tiny'));  // everytime we send a request to the server, it will be logged
app.use('/v1/weapons');
app.use('/', home);


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