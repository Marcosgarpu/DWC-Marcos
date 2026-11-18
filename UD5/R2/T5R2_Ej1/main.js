(function () {

    let enlaces = document.querySelectorAll("a");

    // 1. Número de enlaces
    function numeroEnlaces() {
        console.log("Número de enlaces totales: ", enlaces.length);
    }

    // 2. Penúltimo enlace
    function penultimoEnlace() {
        console.log("Penúltimo enlace: ", enlaces[enlaces.length - 2].href);
    }

    // 3. Enlaces a Google
    function enlacesGoogle() {
        let contGoogle = 0;
        enlaces.forEach(element => {
            if (element.href.includes("google")) {
                contGoogle++;
            }
        });
        console.log("Enlaces a Google: ", contGoogle);
    }

    // 4. Enlaces del tercer párrafo
    function enlacesTercerParrafo() {
        let parrafos = document.getElementsByTagName("p");
        console.log("Número de enlaces del tercer párrafo: ", parrafos[2].getElementsByTagName("a").length);
    }

    // Ejecución de todas las funciones
    numeroEnlaces();
    penultimoEnlace();
    enlacesGoogle();
    enlacesTercerParrafo();

})();