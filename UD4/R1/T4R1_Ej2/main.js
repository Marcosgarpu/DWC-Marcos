function mostrarPosicion(evento) {
    let posicion = document.getElementById("posicion");
    posicion.textContent = "Posición: X = " + evento.clientX + ", Y = " + evento.clientY;
}

(function () {

    document.addEventListener("mousemove", mostrarPosicion);

})();