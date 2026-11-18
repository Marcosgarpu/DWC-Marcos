(function () {

    let contenedor = document.getElementById("ficheros");
    let botonAdjuntar = document.getElementById("adjuntar");

    function adjuntarOtroFichero() {
        let div = document.createElement("div");
        let input = document.createElement("input");
        input.type = "file";
        input.name = "fichero[]";
        div.appendChild(input);
        contenedor.appendChild(div);
    }

    // Ejecución de todas las funciones
    botonAdjuntar.addEventListener("click", adjuntarOtroFichero);

})();