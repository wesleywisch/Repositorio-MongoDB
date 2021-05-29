const Link = require("../models/Link");

// aqui aonde vai ter todas as funções


const redirect = async (req, res) => {

    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title }) // o find me retorna todos os objetos dentro do array, eo o findOne me retorna somente um, mais com o que condiz com o que foi passado no casso o (title).
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }
};


const addLink = async (req, res) => {
    let link = new Link(req.body);

    try {
        let doc = await link.save();
        res.send("Link adicionado com sucesso!");
    } catch (error) {
        res.render('index', { error, body: req.body });
    }
}

const allLinks = async(req, res) => {

    try {
        let links = await Link.find({});
        res.send(links);
    } catch (error) {
        res.send(error);
    }
}


module.exports = { redirect, addLink, allLinks }