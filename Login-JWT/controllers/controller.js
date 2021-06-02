const User = require('../models/User');


const controller = {
    register: async function (req, res) {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
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