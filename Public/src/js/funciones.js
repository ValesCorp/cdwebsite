// funciones.js – 28 de nov de 2025
//
// Vales Corp
//
// Para funciones de página, van específicamente funciones, disparadores, etc.
document.addEventListener('DOMContentLoaded', function() {
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
});
$(document).ready(function() {
    // create sidebar and attach to menu open
    $("#primario.ui.sidebar").sidebar("attach events", ".toc.item");
    $("#portafolio.ui.sidebar").sidebar("attach events", ".portafolio.item");
    // tarjetas con blur
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    //blur para el slider
    $('.slide .image').dimmer({
        on: 'hover'
    });
    //menú dropdown
    $('.ui.dropdown')
        .dropdown()
    ;
    //acordeones
    $('.ui.accordion')
        .accordion()
    ;
    // popups
    $('.ver.mas')
        .popup()
    ;
    // Modal de aviso de privacidad xd
    $('#avisoPrivacidad').click(function() {
        $('#privacidad')
            .modal('show')
        ;
    });
    // Modal de aviso de bolsa de trabajop3 xd
    $('#bolsaTrabajo').click(function() {
        $('#bolsa')
            .modal('show')
        ;
    });
    $('.ui.sticky')
        .sticky({
            context: '#submenusticky',
            pushing: true
        });
});

