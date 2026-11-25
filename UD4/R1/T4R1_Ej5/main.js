let FILAS = 100;
let COLUMNAS = 100;
let tabla;

function crearCanvas() {
    let contenedor = document.getElementById("contenedor");
    tabla = document.createElement("table");
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
    document.getElementById("btnBorrar").addEventListener("click", borrarTodo);
}

function pintar(evento) {
    let celda = evento.target;
    if (celda.tagName !== "TD") {
        return;
    }

    if (evento.buttons === 1) {
        // Botón izquierdo pulsado: borrar
        celda.style.backgroundColor = "";
    } else if (evento.ctrlKey) {
        celda.style.backgroundColor = "red";
    } else if (evento.shiftKey) {
        celda.style.backgroundColor = "blue";
    }
}

function borrarTodo() {
    let celdas = tabla.getElementsByTagName("td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor = "";
    }
}

(function () {

    window.addEventListener("load", crearCanvas);

})();