(function () {

    let lista = document.getElementById("lista");
    let boton = document.getElementById("boton");

    function anadirElemento() {
        let numero = lista.children.length + 1;
        let li = document.createElement("li");
        li.textContent = "Elemento " + numero;
        lista.appendChild(li);
    }

    // Ejecución de todas las funciones
    boton.addEventListener("click", anadirElemento);

})();