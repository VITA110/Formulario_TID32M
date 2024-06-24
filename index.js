function mostrarMensaje(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje');

    if (nombre.trim() !== '') {
        mensaje.innerHTML = 'Te haz registrado correctamente!';
    } else {
        mensaje.innerHTML = 'Por favor ingresa tu nombre.';
    }
}
