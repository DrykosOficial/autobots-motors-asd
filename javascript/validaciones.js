/*VALIDACION REGISTRO */
(function() {
    'use strict'

    var usuario = document.getElementById('user1');
    var contrasenna = document.getElementById('pass1');
    var contrasenna2 = document.getElementById('pass2');
    var correo = document.getElementById('correo');

    form.addEventListener('click', e => {
        e.preventDefault();

        JsRegistrar();
    });

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