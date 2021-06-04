const room = window.location.pathname.replace(/\//g, '');

const socket = io(`http://localhost:3000/${room}`);

let user = null;

socket.on('update_messages', (messages) => {

    updateMessagesOnScreen(messages);

});

function updateMessagesOnScreen(messages) {
    const div_messages = document.querySelector('#msgs');

    let list_msg = '<ul>'
    messages.forEach(message => {
        list_msg += `<li><span>${message.user}</span>: ${message.msg}</li>`
    })
    list_msg += '</ul>'

    div_messages.innerHTML = list_msg;


}

document.addEventListener('DOMContentLoaded', () => {

    // esse é o chat em si
    const form = document.querySelector('#form_msg');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(!user){
            alert("Por favor defina o seu usuário");
            return;
        }


        const input_message = document.querySelector('#enviar_msg').value;
        document.querySelector('#enviar_msg').value = '';
        socket.emit('Nova_mensagem', { user: user,  msg: input_message });
    })

    //esse eo usuário
    const userForm = document.querySelector('#user_form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        user = document.forms['user_form_name']['user'].value;
        userForm.parentNode.removeChild(userForm);
    })
})