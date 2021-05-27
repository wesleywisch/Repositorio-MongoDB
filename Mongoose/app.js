const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');


// As 3 maneiras de se conectar no banco de dados.


// 1° Maneira de se conectar no banco de dados é através de um callback

// dentro do connect colocaremos a url para termos conecção com o banco de dados de fato, mais usaremos o localhost, mais para frente colocamos relamente uma url de servidor.

// mongoose.connect("mongodb://localhost/links", (error, db)=>{
//     console.log(error);
//     console.log(db);

// });


// 2° Maneira de se conectar no banco de dados através meio que fosse uma "promisse", e precisamos tratar o erro se houver um erro atrvés do catch.

// mongoose.connect("mongodb://localhost/links").then(db=>{
//     console.log(db);
// }).catch(error=>{
//     console.log(error)
// });


// 3° Maneira de se conectar no banco de dados.

// mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true})

// let db = mongoose.connection;

// // console.log(db);

// db.on("error", () => { console.log("houve um erro") });
// db.once("open", () => { console.log("Banco carregado") });


// Criando um documento


// mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true})

// let db = mongoose.connection;

// // console.log(db);

// db.on("error", () => { console.log("houve um erro") });
// db.once("open", () => { console.log("Banco carregado") });


// documento criando usando uma forma de links

// o Schema é o jeito que vai conter o nosso documento.

// const linkSchema = new mongoose.Schema({
//     title: {type: String, required: true}, // o required siginifica que o campo é obrigatorio estar preenchido.
//     description: String,
//     url: {type: String, required: true},
//     click: {type: Number, default: 0},
// });


// o model ele é mais a representação da nossa coleção 

// const Link = mongoose.model('Link', linkSchema);

// let link = new Link({
//     title: "Github",
//     description: "Link para o Github",
//     url: "https://github.com/wesleywisch",
//     // click: 0,
// });

// link.save().then(doc => { // serve para salver no banco de dados
//     console.log(doc);
// }).catch(err => {
//     console.log(err);
// });


// documento criado usando form de uma pessoas


// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// const Person = mongoose.model('Person', personSchema);

// let person = new Person({
//     name: "José",
//     age: 23,
// });

// person.save().then(doc => {
//     console.log(doc);
// }).catch(err =>{
//     console.log(err);
// });



// Buscando por um documento


mongoose.connect("mongodb://localhost/newlinks", { useNewUrlParser: true, useUnifiedTopology: true })

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 },
});

const Link = mongoose.model('Link', linkSchema)


let db = mongoose.connection;


db.on("error", () => { console.log("houve um erro") });
db.once("open", () => {
    console.log("Banco carregado")

    app.get('/:title', async (req, res) => {

        let title = req.params.title;

        try {
            let doc = await Link.findOne({ title }) // o find me retorna todos os objetos dentro do array, eo o findOne me retorna somente um, mais com o que condiz com o que foi passado no casso o (title).
            console.log(doc);
            res.redirect(doc.url);
        } catch (err) {
            res.send(err);
        }
    })
});




app.get("/", (req, res) => {
    res.send("Hello world!")
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})