// menu.js – 14 de enero de 2025
//
// Vales Corp
//
// Para menú de la página, acciones de menú.

$(document).ready(function () {
    // Para menú cortina móvil
    // Oculta la cortina mediante una clase, se usa una clase para manejarlo más fácil
    if($('#cortina_movil').hasClass('insanus')) {
        $('#cortina_movil').hide();
    }
    if($('#cortina_musica').hasClass('proditio')) {
        $('#cortina_musica').hide();
    }
    if($('#cortina_contactos').hasClass('sexy')) {
        $('#cortina_contactos').hide();
    }

    // Botón de acción del menú móvil, básicamente evalua si la cortina tiene la clase para mostrar u ocultar
    // si es asi, cambia el ícono del menú y muestra la cortina, caso contrario, cambia la clase y el mismo proceso
    $('#boton_menu_movil').click(function () {
        if($('#cortina_movil').hasClass('insanus')) {
            $('#cortina_movil').removeClass('insanus');
            $('#span_menu').text('close');
            $('#cortina_movil').addClass('ultio');
            $('#cortina_movil').slideToggle(150);
            $('#menu_christian_death_logo').hide();
            $('#buscar').hide();
        } else if($('#cortina_movil').hasClass('ultio')) {
            $('#cortina_movil').removeClass('ultio');
            $('#span_menu').text('menu');
            $('#cortina_movil').addClass('insanus');
            $('#cortina_movil').slideToggle(150);
            $('#menu_christian_death_logo').show();
            $('#buscar').show();
        }
    });

    // Función cuando entra el cursor sobre los elementos con id
    // Entra cursor sobre elemento con id musica
    $('#music').mouseenter(function () {
        if($('#cortina_musica').hasClass('proditio')) {
            $('#cortina_musica').removeClass('proditio');
            $('#cortina_musica').addClass('misericordiaque');
            $('#cortina_musica').slideToggle(400);
        }
    });
    // Entra cursor sobre elemento con id contacts
    $('#contacts').mouseenter(function () {
        if($('#cortina_contactos').hasClass('sexy')) {
            $('#cortina_contactos').removeClass('sexy');
            $('#cortina_contactos').addClass('death');
            $('#cortina_contactos').slideToggle(400);
        }
    });
    // $('#menu').mouseenter(function () {
    //     if($('#music').mouseenter)
    // });
});
