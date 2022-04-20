/*FORMULARIO DE REGISTRO CON JS*/

var usuario = document.getElementById('user1');
var contrasenna = document.getElementById('pass1');
var contrasenna2 = document.getElementById('pass2');
var correo = document.getElementById('correo');

form.addEventListener('click', e => {
    e.preventDefault();

    JsRegistrar();
});

function JsRegistrar() {

    var usuarioValue = usuario.value;
    var correoValue = correo.value;
    var contrasennaValue = pass.value;
    var contrasenna2Value = pass2.value;

    if (usuarioValue == '') {
        setErrorFor(usuario, 'No puede dejar el usuario en blanco.')

    } else {
        setSuccessFor(usuario);
    }
    if (correoValue === '') {
        setErrorFor(correo, 'No puede dejar el email en blanco');
    } else if (!isEmail(correoValue)) {
        setErrorFor(correo, 'No ingreso un email válido');
    } else {
        setSuccessFor(correo);
    }

    if (contrasennaValue === '') {
        setErrorFor(contrasenna, 'No debe dejar en blanco la contrasena');
    } else {
        setSuccessFor(contrasenna);
    }

    if (contrasenna2Value === '') {
        setErrorFor(contrasenna2, 'No debe dejar en blanco la contrasena');
    } else if (contrasennaValue !== contrasenna2Value) {
        setErrorFor(contrasenna2, 'Las contrasenas no coinciden');
    } else {
        setSuccessFor(contrasenna2);
    }


}

function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'formu-control success';
}


function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    formControl.className = 'formu-control error';
    small.innerText = message;
}

function isEmail(correo) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}

/*FORMULARIO DE CONTACTO CON JS */
function JSENVIAR() {
    var nombre = document.getElementById("name").value
    var telefono = document.getElementById("telefono").value
    var email = document.getElementById("email").value
    var text = document.getElementById("mensaje").value



    if (nombre.length == 0) {

        document.getElementById("errorName").innerHTML = "El nombre no debe ser vacío";
    }
    if (telefono.length == 0) {
        document.getElementById("errorTelefono").innerHTML = "El telefono no debe ser vacío";
    }
    if (email.length == 0) {
        document.getElementById("errorEmail").innerHTML = "El email no debe ser vacío";
    }
    if (text.length == 0) {
        document.getElementById("errorText").innerHTML = "Mensaje no debe ser vacío";
    }

    document.getElementById("resultado").innerHTML = total;
}


/*FORMULARIO INICIO SESION CON JQ */


$(document).ready(function() {
    $("#JEnviar").click(function() {
        var nombre = $("#users").val();
        var contrasenna = $("#pass").val();

        if (nombre == "") {
            $("#mensaje1").show();


        } else {
            $("#mensaje1").hide();

        }
        if (contrasenna == "") {
            $("#mensaje2").show();


        } else {
            $("#mensaje2").hide();

        }

    });
});