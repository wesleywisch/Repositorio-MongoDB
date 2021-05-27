const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');


// Criando um documento


mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => { console.log("Banco carregado") });


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


app.get("/", (req, res) => {
    res.send("Hello world!")
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})