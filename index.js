const morgan = require('morgan');
const helmet = require('helmet');
// const Joi = require('joi');

const weapons = require('./routes/weapon_routes');
const home = require('./routes/home');


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));    // all of our static assets (css, images, etc) in this public folder

// app.get('/', (req, res) => {
//     res.send("This is at '/' endpoint");
// })

app.listen(port, () => console.log(`Listening on port ${port}`));