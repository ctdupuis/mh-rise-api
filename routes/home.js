const express = require("express");
const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('index', { title: 'Monster Hunter Rise', message: 'Welcome to MonHunAPI' });
});

module.exports = router;