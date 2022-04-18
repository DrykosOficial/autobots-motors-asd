/*VALIDACION REGISTRO CON JAVASCRIPT */
(function() {
    'use strict'


    var forms = document.querySelectorAll('.needs-validation')


    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

/*VALIDACION FORMULARIO CON JQUERY */
function sumarDosNumeros() {
    var nombre = document.getElementById("name").value
    var telefono = document.getElementById("telefono").value
    var email = document.getElementById("email").value

    //alert(total); 

    if (nombre.length == 0) {
        //alert("Debe Ingresar Nombre");
        document.getElementById("errorName").innerHTML = "El nombre no debe ser vacío";
    }
    if (telefono.length == 0) {
        //alert("Debe Ingresar telefono");
        document.getElementById("errorTelefono").innerHTML = "El telefono no debe ser vacío";
    }
    if (email.length == 0) {
        //alert("Debe Ingresar email");
        document.getElementById("errorEmail").innerHTML = "El email no debe ser vacío";
    }

    document.getElementById("resultado").innerHTML = total;
}