const express = require('express');
const router = express.Router();
const linkController = require('../controlles/linkController')

router.get('/:title', linkController.redirect); // se houver um erro ele executa essa parte

router.get("/", (req, res) => res.render('index', { error: false, body: {} })); // se não houver nenhum erro ele executa essa parte

router.post('/', express.urlencoded({ extended: true }), linkController.addLink);


module.exports = router