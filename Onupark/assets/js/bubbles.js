// Se activa cada vez que se scrollea
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function reveal() {
    var bubbles = document.querySelectorAll(".img-bubble");

    // Los recorremos comprobando su distancia a la parte de arriba de la pantalla
    for (var i = 0; i < bubbles.length; i++) {
        var windowHeight = window.innerHeight; // Altura de la ventana
        var elementTop = bubbles[i].getBoundingClientRect().top; // Altura del elemento
        var elementVisible = -550; // Altura a la que se debe mostrar

        if (elementTop < windowHeight - elementVisible) {
            bubbles[i].classList.add("show");
        }
    }
}