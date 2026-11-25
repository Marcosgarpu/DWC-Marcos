function sustituirAmpersand(evento) {
    let campo = evento.target;
    campo.value = campo.value.replace(/&/g, "and");
}

(function () {

    let campo = document.getElementById("texto");
    campo.addEventListener("blur", sustituirAmpersand);

})();