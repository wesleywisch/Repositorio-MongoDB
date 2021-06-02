const controller = {
    register: function (req, res){
        console.log("Registrado");
        res.send("Registrado");
    },
    login: function(req, res){
        console.log("Login");
        res.send("Login");
    }
}

module.exports = controller;