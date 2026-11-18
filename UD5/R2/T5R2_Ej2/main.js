(function () {

    let resto = document.getElementById("resto");
    let enlace = document.createElement("a");

    function ocultarResto() {
        resto.style.display = "none";
    }

    function crearEnlace() {
        enlace.href = "#";
        enlace.textContent = "Ver Artículo Completo";
        document.getElementById("articulo").appendChild(enlace);
    }

    function mostrarResto(evento) {
        evento.preventDefault();
        resto.style.display = "inline";
        enlace.style.display = "none";
    }

    // Ejecución de todas las funciones
    ocultarResto();
    crearEnlace();
    enlace.addEventListener("click", mostrarResto);

})();