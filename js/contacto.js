document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
    
        if (!nombre) {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        if (!email) {
            alert('Por favor, ingrese su correo electrónico.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!asunto) {
            alert('Por favor, ingrese el asunto del mensaje.');
            return;
        }

        if (!mensaje) {
            alert('Por favor, ingrese el mensaje.');
            return;
        }

        alert(`Gracias por su contacto ${nombre}! En breve le estaré respondiendo.`);
        form.reset();
    });
});