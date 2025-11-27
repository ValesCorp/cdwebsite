// funciones.js – 28 de nov de 2025
//
// Vales Corp
//
// Para funciones de página, van específicamente funciones, disparadores, etc.
document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("listenToggle");
    const menu = document.getElementById("fsMenu");
    const overlay = document.getElementById("fsOverlay");
    const closeBtn = document.getElementById("closeFsMenu");

    function openMenu() {
        menu.classList.add("show");
        overlay.style.display = "block";
    }

    function closeMenu() {
        menu.classList.remove("show");
        overlay.style.display = "none";
    }

    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation(); // evita conflicto con Semantic
        openMenu();
    });

    overlay.addEventListener("click", closeMenu);
    closeBtn.addEventListener("click", closeMenu);
});

