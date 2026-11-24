// ---------- Funciones de validación (expresiones regulares) ----------
function validarMinuscula(texto) {
    return /[a-z]/.test(texto);
}

function validarMayuscula(texto) {
    return /[A-Z]/.test(texto);
}

function validarLongitud(texto) {
    return /^.{6,}$/.test(texto);
}

// ---------- Funciones de interfaz ----------
function marcarRequisito(elemento, cumple) {
    elemento.classList.toggle("valido", cumple);
}

function actualizarValidacion() {
    let valor = document.getElementById("usuario").value;
    let minuscula = validarMinuscula(valor);
    let mayuscula = validarMayuscula(valor);
    let longitud = validarLongitud(valor);

    marcarRequisito(document.getElementById("minuscula"), minuscula);
    marcarRequisito(document.getElementById("mayuscula"), mayuscula);
    marcarRequisito(document.getElementById("longitud"), longitud);

    document.getElementById("enviar").disabled = !(minuscula && mayuscula && longitud);
}

function enviarFormulario(evento) {
    evento.preventDefault();
    alert("Nombre de usuario válido: " + document.getElementById("usuario").value);
}

function asignarEventos() {
    document.getElementById("usuario").addEventListener("input", actualizarValidacion);
    document.getElementById("formulario").addEventListener("submit", enviarFormulario);
}

// ---------- Función principal ----------
(function Main() {
    actualizarValidacion();
    asignarEventos();
})();