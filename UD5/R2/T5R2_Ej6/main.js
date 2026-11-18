(function () {

    const imagenes = [
        "https://picsum.photos/id/10/400/300",
        "https://picsum.photos/id/20/400/300",
        "https://picsum.photos/id/30/400/300",
        "https://picsum.photos/id/40/400/300",
        "https://picsum.photos/id/50/400/300"
    ];

    let indice = 0;
    let img = document.getElementById("imagen");
    let contador = document.getElementById("contador");
    let botonAnterior = document.getElementById("anterior");
    let botonSiguiente = document.getElementById("siguiente");

    function mostrarImagen() {
        img.src = imagenes[indice];
        contador.textContent = "Imagen " + (indice + 1) + " de " + imagenes.length;
    }

    function siguiente() {
        indice = (indice + 1) % imagenes.length;
        mostrarImagen();
    }

    function anterior() {
        indice = (indice - 1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    }

    // Ejecución de todas las funciones
    mostrarImagen();
    botonSiguiente.addEventListener("click", siguiente);
    botonAnterior.addEventListener("click", anterior);

})();