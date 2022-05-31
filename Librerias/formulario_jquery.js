$("#formulario_registro").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 30,
        },
        nacimiento: {
            required: true,
        }
    }
})

$("#Registrar").click(function() {
    if ($("#formulario_registro").valid() == false) {
        return;
    }
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let nacimiento = $("#nacimiento").val();
    let genero = $("#genero").val();
    let email = $("#email").val();
    let nickname = $("#nickname").val();
    let contrasena = $("#contrasena").val();
});

$(document).ready(function() {
    $('#mostrar_contrasena').click(function() {
        if ($('#mostrar_contrasena').is(':checked')) {
            $('#contrasena').attr('type', 'text');
        } else {
            $('#contrasena').attr('type', 'password');
        }
    });
});