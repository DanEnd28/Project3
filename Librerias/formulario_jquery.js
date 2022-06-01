$(document).ready(function() {
    $("#mostrar_contrasena").click(function() {
        if ($('#mostrar_contrasena').is(':checked')) {
            $('#contrasena').attr('type', 'text');
        } else {
            $('#contrasena').attr('type', 'password');
        }
    });
    $("#Registro").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 30,
                Number: false
            },
            apellido: {
                required: true,
                minlength: 3,
                maxlength: 30,
                Number: false
            },
            nacimiento: {
                required: true
            },
            genero: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            nickname: {
                required: true
            },
            contrasena: {
                required: true
            }
        },
    });

    $

});