let colores = [
    { nombre: "negro",    hex: "#000000" },
    { nombre: "blanco",   hex: "#FFFFFF" },
    { nombre: "rojo",     hex: "#FF0000" },
    { nombre: "verde",    hex: "#00FF00" },
    { nombre: "azul",     hex: "#0000FF" },
    { nombre: "amarillo", hex: "#FFFF00" },
    { nombre: "cian",     hex: "#00FFFF" },
    { nombre: "magenta",  hex: "#FF00FF" },
    { nombre: "gris",     hex: "#808080" },
    { nombre: "naranja",  hex: "#FFA500" },
    { nombre: "marrón",   hex: "#A52A2A" },
    { nombre: "morado",   hex: "#800080" }
];

let imagenNormal;
let imagenHover;

// Crea una imagen SVG (como data URI) con un texto y un color de fondo
function crearImagen(texto, fondo, ancho, alto) {
    let svg = "<svg xmlns='http://www.w3.org/2000/svg' width='" + ancho + "' height='" + alto + "'>" +
              "<rect width='100%' height='100%' rx='12' fill='" + fondo + "'/>" +
              "<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' " +
              "font-family='Arial' font-size='30' font-weight='bold' fill='white'>" +
              texto + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function crearTitulo() {
    let titulo = document.getElementById("titulo");

    imagenNormal = crearImagen("Colores en hexadecimal", "#2c3e50", 400, 80);
    imagenHover = crearImagen("Colores en hexadecimal", "#e67e22", 400, 80);

    titulo.src = imagenNormal;
    titulo.addEventListener("mouseover", cambiarTitulo);
    titulo.addEventListener("mouseout", restaurarTitulo);
}

function cambiarTitulo(evento) {
    evento.target.src = imagenHover;
}

function restaurarTitulo(evento) {
    evento.target.src = imagenNormal;
}

function crearCelda(color) {
    let celda = document.createElement("td");
    celda.textContent = color.hex;
    celda.dataset.hex = color.hex;
    celda.dataset.nombre = color.nombre;

    celda.addEventListener("mouseover", mostrarColor);
    celda.addEventListener("mouseout", mostrarNombre);

    return celda;
}

function mostrarColor(evento) {
    let celda = evento.target;
    celda.textContent = celda.dataset.hex;
    celda.style.color = celda.dataset.hex;
}

function mostrarNombre(evento) {
    let celda = evento.target;
    celda.textContent = celda.dataset.nombre;
    celda.style.color = "black";
}

function crearTabla() {
    let tabla = document.getElementById("tabla");

    for (let i = 0; i < colores.length; i += 3) {
        let fila = document.createElement("tr");

        for (let j = i; j < i + 3; j++) {
            fila.appendChild(crearCelda(colores[j]));
        }
        tabla.appendChild(fila);
    }
}

(function () {

    crearTitulo();
    crearTabla();

})();