var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');
var form = document.getElementById('formulario');
form.addEventListener('submit', function(enviarFormulario){
    enviarFormulario.preventDefault();

    var mensajeError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajeError.push ('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajeError.push ('Ingresa tu ');
    }
    if(email.value === null || email.value === ''){
        mensajeError.push ('Ingresa tu correo electrónico');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajeError.push ('Ingresa tu mensaje');
    }

    error.innerHTML = mensajeError.join(', ');

    })