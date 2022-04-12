/*VALIDACION REGISTRO */
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

/*VALIDACION FORMULARIO */
function sumarDosNumeros() {
    var nombre = document.getElementById("name").value
    var telefono = document.getElementById("telefono").value
    var email = document.getElementById("email").value
    var mensaje = document.getElementById("mensaje").value
        //alert(total); 

    if (nombre.length == 0) {
        //alert("Debe Ingresar Nombre");
        document.getElementById("errorName").innerHTML = "El nombre no debe ser vacío";
    }
    document.getElementById("resultado").innerHTML = total;
}