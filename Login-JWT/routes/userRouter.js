const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => { 
    console.log("Registrado"); 
    res.send("Registrado");
});

router.post('/login', (req, res) => { 
    console.log("Login")
    res.send("Login");
});

module.exports = router;