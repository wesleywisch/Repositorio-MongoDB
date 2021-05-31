const Link = require("../models/Link");

// aqui aonde vai ter todas as funções


const redirect = async (req, res, next) => {

    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title }) // o find me retorna todos os objetos dentro do array, eo o findOne me retorna somente um, mais com o que condiz com o que foi passado no casso o (title).
        console.log(doc);
        if(doc){
            res.redirect(doc.url);
        }else{
            next();
        }
    } catch (error) {
        res.send(error);
    }
};


const addLink = async (req, res) => {
    let link = new Link(req.body);

    try {
        let doc = await link.save();
        res.redirect('/');
    } catch (error) {
        res.render('index', { error, body: req.body });
    }
}

const allLinks = async (req, res) => {

    try {
        let links = await Link.find({});
        res.render('all', { links });
    } catch (error) {
        res.send(error);
    }
}

const deleteLink = async(req, res) =>{

    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    try {
        await Link.findByIdAndDelete(id);
        // res.send(id);
        res.redirect('/')
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = { redirect, addLink, allLinks, deleteLink }