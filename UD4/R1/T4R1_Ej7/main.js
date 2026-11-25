let ids = ["nombre", "correo", "comentario", "enviar", "resetear"];

let mensajes = {
    nombre:     "Escribe aquí tu nombre completo.",
    correo:     "Escribe tu correo electrónico para poder responderte.",
    comentario: "Escribe el comentario que quieres enviarnos.",
    enviar:     "Pulsa para enviar el formulario.",
    resetear:   "Pulsa para borrar todos los campos del formulario."
};

function mostrarAyuda(evento) {
    let ayuda = document.getElementById("ayuda");
    ayuda.textContent = mensajes[evento.target.id];
}

function ocultarAyuda() {
    let ayuda = document.getElementById("ayuda");
    ayuda.textContent = "";
}

function asignarEventos() {
    for (let i = 0; i < ids.length; i++) {
        let elemento = document.getElementById(ids[i]);
        elemento.addEventListener("focus", mostrarAyuda);
        elemento.addEventListener("blur", ocultarAyuda);
    }
}

(function () {

    asignarEventos();

})();