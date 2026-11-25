let imagen;
let arrastrando = false;
let desplazamientoX = 0;
let desplazamientoY = 0;

function crearImagen(texto, fondo, ancho, alto) {
    let svg = "<svg xmlns='http://www.w3.org/2000/svg' width='" + ancho + "' height='" + alto + "'>" +
              "<rect width='100%' height='100%' rx='12' fill='" + fondo + "'/>" +
              "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' " +
              "font-family='Arial' font-size='24' font-weight='bold' fill='white'>" +
              texto + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function empezar(evento) {
    arrastrando = true;
    // Distancia entre el ratón y la esquina de la imagen
    desplazamientoX = evento.clientX - imagen.offsetLeft;
    desplazamientoY = evento.clientY - imagen.offsetTop;
    imagen.style.cursor = "grabbing";
    evento.preventDefault();
}

function mover(evento) {
    if (arrastrando) {
        imagen.style.left = (evento.clientX - desplazamientoX) + "px";
        imagen.style.top = (evento.clientY - desplazamientoY) + "px";
    }
}

function soltar() {
    arrastrando = false;
    imagen.style.cursor = "grab";
}

function prepararImagen() {
    imagen = document.getElementById("imagen");
    imagen.src = crearImagen("Arrástrame", "#8e44ad", 160, 120);

    imagen.addEventListener("mousedown", empezar);
    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);
}

(function () {

    prepararImagen();

})();