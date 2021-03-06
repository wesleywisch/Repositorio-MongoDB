const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { loginValidate, registerValidate } = require('./validate');


const controller = {
    register: async function (req, res) {

        // serve para validar a entrada de um novo registro (no caso na hora quando for se registrar)
        const { error } = registerValidate(req.body);
        if(error){ return res.status(400).send(error.message) }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser) { return res.status(400).send("Email já existente") };

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })

        try {
            const savedUser = await user.save();
            res.send(savedUser)
        } catch (error) {
            res.status(400).send(error);
        }
    },
    login: async function (req, res) {

        // serve para validar a entrada de um login (no caso na hora quando for se registrar)
        const { error } = loginValidate(req.body);
        if(error){ return res.status(400).send(error.message) }

        // serve para olhar se o email já existe no bando de dados ou não.
        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser){ return res.status(400).send("Email ou Password incorretos!") };

        // serve para olhar se a senha já existe ou não, se está errada ou não. E se extiver tudo certo ele faz o login desse usuário.
        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if (!passwordAndUserMatch) { return res.status(400).send("Email ou Password incorretos!") };

        const token = jwt.sign({_id: selectedUser._id, admin: selectedUser.admin}, process.env.TOKEN_SECRET);

        res.header('authoriztion-token', token);
        res.send("Usuário logado");


    }
}

module.exports = controller;