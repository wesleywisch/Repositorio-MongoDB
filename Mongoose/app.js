const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const path = require('path');
const linkRouter = require('./routes/linkRouter');



mongoose.connect("mongodb://localhost/newlinks", { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection;


db.on("error", () => { console.log("houve um erro") });
db.once("open", () => {console.log("Banco carregado")});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRouter);


app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});