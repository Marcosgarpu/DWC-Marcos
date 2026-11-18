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

    function alternarResto(evento) {
        evento.preventDefault();
        if (resto.style.display === "none") {
            resto.style.display = "inline";
            enlace.textContent = "Ocultar Artículo";
        } else {
            resto.style.display = "none";
            enlace.textContent = "Ver Artículo Completo";
        }
    }

    // Ejecución de todas las funciones
    ocultarResto();
    crearEnlace();
    enlace.addEventListener("click", alternarResto);

})();