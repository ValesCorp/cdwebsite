// historia.js – 9 de ene de 2026
//
// Vales Corp
//
// Para mini historia de inicio porque no funciono junto a funciones.js >:c.
$(document).ready(function (){
    // para la mini historia
    //escenas ocultas por defecto
    if ($('#escena_uno').hasClass('oculto')) {
        $('#escena_uno').hide();
    }
    if ($('#escena_dos').hasClass('oculto')) {
        $('#escena_dos').hide();
    }
    if ($('#escena_tres').hasClass('oculto')) {
        $('#escena_tres').hide();
    }
    if ($('#escena_cuatro').hasClass('oculto')) {
        $('#escena_cuatro').hide();
    }

    // Para el botón de christian death
    $('#christian_death_button').on('click', function () {
        // Obtiene la posición del elemento destino
        // var posicionDestino = $("#escena_uno").offset().top;
        var destino = $('#escena_uno');
        var posicion = destino.offset().top - 30; // Отступ 30px
        // Se desplaza hasta ese punto
        $("#escena_uno").show(1500);
        $("html, body").animate({ scroll: posicionDestino }, 1200);
        console.log('hola');
    });

    $('#escena_dos')
        .visibility({
            onBottomPassed: function(onScreen) {
                $('#escena_dos').show(1500);
            },
        })
    ;
});

