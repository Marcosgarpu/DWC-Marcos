// ---------- Funciones de validación (expresiones regulares) ----------
function validarNombre(valor) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+([ '-][A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/.test(valor);
}

function validarTelefono(valor) {
    return /^\+?\d{1,3}?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3,4}$/.test(valor);
}

function validarCorreo(valor) {
    return /^[\w.+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(valor);
}

function validarPassword(valor) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(valor);
}

function validarConfirmacion(valor) {
    return valor !== "" && valor === document.getElementById("password").value;
}

// ---------- Campos a validar ----------
const campos = [
    { id: "nombre", validar: validarNombre, mensaje: "Enter a valid first name (letters only)." },
    { id: "apellido", validar: validarNombre, mensaje: "Enter a valid last name (letters only)." },
    { id: "telefono", validar: validarTelefono, mensaje: "Enter a valid phone, e.g. 949-867-5309." },
    { id: "correo", validar: validarCorreo, mensaje: "Enter a valid email address." },
    { id: "password", validar: validarPassword, mensaje: "Min. 8 characters, with uppercase, lowercase and a number." },
    { id: "confirmar", validar: validarConfirmacion, mensaje: "Passwords do not match." }
];

// ---------- Mostrar / quitar errores ----------
function marcarCampo(input, esValido, mensaje) {
    let error = document.getElementById("error-" + input.id);
    input.classList.toggle("incorrecto", !esValido);
    input.classList.toggle("correcto", esValido);
    error.textContent = esValido ? "" : mensaje;
}

function validarCampo(campo) {
    let input = document.getElementById(campo.id);
    let esValido = campo.validar(input.value.trim());
    marcarCampo(input, esValido, campo.mensaje);
    return esValido;
}

function validarTerminos() {
    let esValido = document.getElementById("terminos").checked;
    document.getElementById("error-terminos").textContent =
        esValido ? "" : "You must accept the terms to continue.";
    return esValido;
}

// ---------- Validación completa ----------
function validarFormulario(evento) {
    evento.preventDefault();
    let todoCorrecto = true;

    campos.forEach(campo => {
        if (!validarCampo(campo)) {
            todoCorrecto = false;
        }
    });

    if (!validarTerminos()) {
        todoCorrecto = false;
    }

    if (todoCorrecto) {
        alert("Registration completed successfully!");
        document.getElementById("formulario").reset();
        document.querySelectorAll("input.correcto").forEach(i => i.classList.remove("correcto"));
    }
}

// ---------- Eventos ----------
function revalidarConfirmacion() {
    if (document.getElementById("confirmar").value !== "") {
        validarCampo(campos[5]);
    }
}

function asignarEventos() {
    campos.forEach(campo => {
        let input = document.getElementById(campo.id);
        input.addEventListener("blur", () => validarCampo(campo));
    });

    // Si cambia la contraseña, se revalida la confirmación
    document.getElementById("password").addEventListener("input", revalidarConfirmacion);
    document.getElementById("terminos").addEventListener("change", validarTerminos);
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
}

// ---------- Función principal ----------
(function Main() {
    asignarEventos();
})();