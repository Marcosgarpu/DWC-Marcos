let colores = ["#e74c3c", "#3498db", "#27ae60", "#f39c12", "#8e44ad"];
let elementoActual = null;   // Imagen que se está arrastrando
let desplazamientoX = 0;
let desplazamientoY = 0;
let zMaximo = 1;

function crearImagen(texto, fondo, ancho, alto) {
    let svg = "<svg xmlns='http://www.w3.org/2000/svg' width='" + ancho + "' height='" + alto + "'>" +
              "<rect width='100%' height='100%' rx='12' fill='" + fondo + "'/>" +
              "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' " +
              "font-family='Arial' font-size='24' font-weight='bold' fill='white'>" +
              texto + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function crearImagenes() {
    for (let i = 0; i < colores.length; i++) {
        let img = document.createElement("img");
        img.src = crearImagen("Imagen " + (i + 1), colores[i], 140, 100);
        img.className = "arrastrable";
        img.style.left = (50 + i * 160) + "px";
        img.style.top = (100 + i * 40) + "px";
        document.body.appendChild(img);
    }
}

function empezar(evento) {
    if (evento.target.className !== "arrastrable") {
        return;
    }

    elementoActual = evento.target;
    desplazamientoX = evento.clientX - elementoActual.offsetLeft;
    desplazamientoY = evento.clientY - elementoActual.offsetTop;

    // La imagen que cogemos se coloca por encima de las demás
    zMaximo++;
    elementoActual.style.zIndex = zMaximo;
    elementoActual.style.cursor = "grabbing";

    evento.preventDefault();
}

function mover(evento) {
    if (elementoActual !== null) {
        elementoActual.style.left = (evento.clientX - desplazamientoX) + "px";
        elementoActual.style.top = (evento.clientY - desplazamientoY) + "px";
    }
}

function soltar() {
    if (elementoActual !== null) {
        elementoActual.style.cursor = "grab";
        elementoActual = null;
    }
}

(function () {

    crearImagenes();

    document.addEventListener("mousedown", empezar);
    document.addEventListener("mousemove", mover);
    document.addEventListener("mouseup", soltar);

})();