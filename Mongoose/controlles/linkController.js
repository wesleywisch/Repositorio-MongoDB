const Link = require("../models/Link");

// aqui aonde vai ter todas as funções


const redirect = async (req, res) =>{

    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title }) // o find me retorna todos os objetos dentro do array, eo o findOne me retorna somente um, mais com o que condiz com o que foi passado no casso o (title).
        console.log(doc);
        res.redirect(doc.url);
    } catch (err) {
        res.send("Houve um erro");
    }
};

module.exports = {redirect}