const express = require("express");
const router = express.Router(); 

const testObjects = [
    {message: "This is a test object", id: 1},
    {message: "So is this one", id: 2}
]

router.get('/', (req, res) => {
    res.send(testObjects);
});

module.exports = router;