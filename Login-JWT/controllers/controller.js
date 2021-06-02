const User = require('../models/User');
const bcrypt = require('bcryptjs');


const controller = {
    register: async function (req, res) {

        const selectedUser = await User.findOne({email: req.body.email});

        if(selectedUser){ return res.status(400).send("Email já existente") }

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
    login: function (req, res) {
        console.log("Login");
        res.send("Login");
    }
}

module.exports = controller;