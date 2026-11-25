function mostrarAlerta() {
    alert("¡Has hecho click!");
}

(function () {

    document.addEventListener("click", mostrarAlerta);

})();