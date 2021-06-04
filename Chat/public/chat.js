
const socket = io('http://localhost:3000');


socket.on('update_messages', (messages) => {

    updateMessagesOnScreen(messages);

});

function updateMessagesOnScreen(messages) {
    const div_messages = document.querySelector('#msgs');

    let list_msg = '<ul>'
        messages.forEach(message => {
            list_msg += `<li>${message}</li>`
        })
    list_msg += '</ul>'

    div_messages.innerHTML = list_msg;


}

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#form_msg');
    form.addEventListener('submit', (e) =>{
        e.preventDefault();


        const input_message = document.querySelector('#enviar_msg').value;
        document.querySelector('#enviar_msg').value = '';
        socket.emit('Nova_mensagem', {msg: input_message});
    })
})