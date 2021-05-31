const express = require('express');
const router = express.Router();
const linkController = require('../controlles/linkController');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

router.get('/', linkController.allLinks); // essa rota retona todos os links que tiverem salvo no banco

router.get('/:title', linkController.redirect); // se houver um erro ele executa essa parte

router.get("/add", (req, res) => res.render('index', { error: false, body: {} })); // se não houver nenhum erro ele executa essa parte

router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

router.delete('/:id', linkController.deleteLink);

router.delete('/', express.urlencoded({extended: true}), linkController.deleteLink);


module.exports = router