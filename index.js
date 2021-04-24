const express = require("express");
const app = express();

require("dotenv").config();
require("./db/db_setup");

const homeRouter = require("./routes/home_route");
const weaponRouter = require("./routes/weapon_routes");

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({});
    }
    next();
})

app.use("/", homeRouter)
app.use("/weapons", weaponRouter);

const PORT = process.env.port || 5000

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening on PORT ${PORT}`)
})