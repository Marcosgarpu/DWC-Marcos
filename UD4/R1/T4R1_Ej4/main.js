let FILAS = 100;
let COLUMNAS = 100;

function crearCanvas() {
    let contenedor = document.getElementById("contenedor");
    let tabla = document.createElement("table");
    let cuerpo = document.createElement("tbody");

    for (let i = 0; i < FILAS; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < COLUMNAS; j++) {
            fila.appendChild(document.createElement("td"));
        }
        cuerpo.appendChild(fila);
    }

    tabla.appendChild(cuerpo);
    contenedor.appendChild(tabla);

    tabla.addEventListener("mousemove", pintar);
}

function pintar(evento) {
    let celda = evento.target;
    if (celda.tagName !== "TD") {
        return;
    }

    if (evento.ctrlKey) {
        celda.style.backgroundColor = "red";
    } else if (evento.shiftKey) {
        celda.style.backgroundColor = "blue";
    }
    // En otro caso no se pinta nada
}

(function () {

    // El canvas se crea cuando la página ha cargado (onLoad)
    window.addEventListener("load", crearCanvas);

})();