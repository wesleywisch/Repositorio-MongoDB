const express = require('express');
const path = require('path');
const app = express();
const socketIO = require('socket.io');


app.use('/', express.static(path.join(__dirname, 'public')));


const server = app.listen(3000, () =>{
    console.log("Servidor rodando!")
});

const io = socketIO(server);


io.on('connection', (socket)=>{

    console.log("Nova conecção");

    socket.emit('hello', {msg: "Seja bem vindo!"});

    socket.on('hello_client_response', (data) =>{
        console.log(data.msg);
    })

})