// funciones.js – 28 de nov de 2025
//
// Vales Corp
//
// Para funciones de página, van específicamente funciones, disparadores, etc.
$(document).ready(function () {
    // fija el menu cuando pasas la página
    $(".masthead").visibility({
        once: false,
        //oculta y desoculta el menu según la clase "movil" o "computadora"
        onBottomPassed: function () {
            $("#menuComputadora").transition("fade in");
            $("#menuMovil").transition("fade in");
        },
        onBottomPassedReverse: function () {
            $("#menuComputadora").transition("fade out");
            $("#menuMovil").transition("fade out");
        },
    });
    $(".secondhead").visibility({
        once: false,
        //oculta y desoculta el menu según la clase "movil" o "computadora"
        onBottomPassed: function () {
            $("#menuComputadora").transition("fade in");
            $("#menuMovil").transition("fade in");
        },
        onBottomPassedReverse: function () {
            $("#menuComputadora").transition("fade out");
            $("#menuMovil").transition("fade out");
        },
    });
    // create sidebar and attach to menu open
    $(".ui.sidebar").sidebar("attach events", ".toc.item");
    // tarjetas con blur
    $(".special.cards .image").dimmer({
        on: "hover",
    });
    //blur para el slider
    $(".slide .image").dimmer({
        on: "hover",
    });
    //menú dropdown
    $(".ui.dropdown").dropdown();
    //acordeones
    $(".ui.accordion").accordion();
    // popups
    $(".ver.mas").popup();
    // Modals de albumes, uno por cada álbum
    // Evil Becomes Rule
    $("#img-ebr").click(function () {
        $("#modal-ebr").modal("show");
    });
    // The Root Of All Evilution
    $("#img-troae").click(function () {
        $("#modal-troae").modal("show");
    });
    // American Inquisition
    $("#img-ai").click(function () {
        $("#modal-ai").modal("show");
    });
    // Born Again Anti-Christian
    $("#img-baac").click(function () {
        $("#modal-baac").modal("show");
    });
    // Pornographic Messiah
    $("#img-pm").click(function () {
        $("#modal-pm").modal("show");
    });
    // Prophecies
    $("#img-p").click(function () {
        $("#modal-p").modal("show");
    });
    // Sexy Death God
    $("#img-sdg").click(function () {
        $("#modal-sdg").modal("show");
    });
    // Insanus, Ultio, Proditio, Misericordiaque
    $("#img-iupm").click(function () {
        $("#modal-iupm").modal("show");
    });
    // All the Love All the Hate (Part One: All the Love)
    $("#img-atlath1").click(function () {
        $("#modal-atlath1").modal("show");
    });
    // All the Love All the Hate (Part One: All the Hate)
    $("#img-atlath2").click(function () {
        $("#modal-atlath2").modal("show");
    });
    // The Scriptures
    $("#img-ts").click(function () {
        $("#modal-ts").modal("show");
    });
    // Sexy Death God
    $("#img-sdjc").click(function () {
        $("#modal-sdjc").modal("show");
    });
});
