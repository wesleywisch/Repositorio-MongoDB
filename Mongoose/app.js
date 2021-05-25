const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');

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

mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection;

// console.log(db);

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => { console.log("Banco carregado") });




app.get("/", (req, res) => {
    res.send("Hello world!")
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})