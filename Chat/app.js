const express = require('express');
const app = express();
const path = require('path');
const socketIo = require('socket.io');


app.use('/sala1', express.static(path.join(__dirname, 'public')));
app.use('/sala2', express.static(path.join(__dirname, 'public')));


const server = app.listen(3000, () => {
    console.log("Server rodando");
});

const messages = { sala1: [], sala2: [] };


const io = socketIo(server);

const sala1 = io.of('/sala1').on('connection', (socket) =>{
    console.log("Nova conecção");
    socket.emit('update_messages', messages.sala1);

    socket.on('Nova_mensagem', (data) => {
        messages.sala1.push(data);
        sala1.emit('update_messages', messages.sala1);
    });
})

const sala2 = io.of('/sala2').on('connection', (socket) =>{
    console.log("Nova conecção");
    socket.emit('update_messages', messages.sala2);

    socket.on('Nova_mensagem', (data) => {
        messages.sala2.push(data);
        sala2.emit('update_messages', messages.sala2);
    });
})