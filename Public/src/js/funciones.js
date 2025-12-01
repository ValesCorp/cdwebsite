// funciones.js – 28 de nov de 2025
//
// Vales Corp
//
// Para funciones de página, van específicamente funciones, disparadores, etc.

/* Open when someone clicks on the span element */
$(document).ready(function () {
                      const menu = document.querySelector('.ui.menu');
const overlay = document.getElementById('megaOverlay');

menu.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        overlay.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!menu.matches(':hover') && !overlay.matches(':hover')) {
                overlay.classList.remove('active');
            }
        }, 60);
    });
});

overlay.addEventListener('mouseleave', () => {
    overlay.classList.remove('active');
});

                  }
                  );
