const express = require('express');
const app = express();
const path = require('path');
const socketIo = require('socket.io');


app.use('/', express.static(path.join(__dirname, 'public')));


const server = app.listen(3000, () => {
    console.log("Server rodando");
});

const messages = [];


const io = socketIo(server);

io.on('connection', (socket) => {
    console.log("Nova conecção");
    socket.emit('update_messages', messages);

    socket.on('Nova_mensagem', (data) =>{
        messages.push(data.msg);

        io.emit('update_messages', messages);
    });
})