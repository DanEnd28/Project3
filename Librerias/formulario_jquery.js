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
            },
            nacimiento: {
                required: true,
                Date: true
            },
            genero: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            nickname: {
                required: true,
                minlength: 3,
                maxlength: 30,
            },
            contrasena: {
                required: true,
                minlength: 3,
                maxlength: 30,
            }
        },
    });

    $("#Compra").validate({
        rules: {
            Email: {
                required: true,
                email: true
            },
            Tlf: {
                required: true,
                minlength: 11,
                maxlength: 15,
            },
            Juego: {
                required: true
            },
            Plataforma: {
                required: true
            },
            direccion: {
                required: true,
                minlength: 10,
                maxlength: 150
            }
        }
    });

});