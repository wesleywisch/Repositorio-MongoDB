const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) =>{

    if(req.user.admin){
        res.send('Esse dado apenas pode ser visto por algum [Admin]');
    }else{
        res.status(401).send('Você não é um [Admin], portanto acesso negado!');
    }

});

router.get('/free', auth, (req,res) =>{
    res.send('Esse dado apenas pode ser visto por quem está logado');
})


module.exports = router;