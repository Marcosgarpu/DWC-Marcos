let inicio;

function actualizar() {
    let tiempo = document.getElementById("tiempo");
    let segundos = Math.floor((Date.now() - inicio) / 1000);
    tiempo.textContent = "Han pasado " + segundos + " segundos desde la carga de la página.";
}

function alCargar() {
    inicio = Date.now();
    actualizar();
    setInterval(actualizar, 1000);
}

(function () {

    window.addEventListener("load", alCargar);

})();